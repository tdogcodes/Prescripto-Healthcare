import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate =  useNavigate();
    const [showMenu, setShowMenu ] = useState(false);
    const [token, setToken ] = useState(true);

  return (
    <nav className='flex justify-between items-center text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=> navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt='logo' />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>Home</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-[var(--primary)] hidden' />
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>All Doctors</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-[var(--primary)] hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>About</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-[var(--primary)] hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>Contact</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-[var(--primary)] hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {token ? 
            <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='rounded-full w-8' src={assets.profile_pic} alt="profile pic" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="profile pic" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium hidden group-hover:block text-gray-500 '>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                        <p onClick={()=>navigate('/my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                        <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                    </div>
                </div>
            </div> :
            <button onClick={()=>navigate('/login')} className='bg-[var(--primary)] text-white px-8 py-3 rounded-full font-light 
            hidden md:block cursor-pointer'>Create account</button>
            }
            <img onClick={()=> setShowMenu(!showMenu)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
            {/* Mobile Menu */}
            <div className={` ${ showMenu ? 'fixed w-full' : 'h-0 w-0' } md:hidden absolute right-0 bottom-0 top-0 z-30 overflow-hidden bg-white transition-all duration-450`}>
                <div className='flex items-center justify-between px-5 py-6'>
                    <img src={assets.logo} className='w-36' alt="" />
                    <img onClick={()=> setShowMenu(!showMenu)} className='size-6' src={assets.cross_icon} alt="" />
                </div>
                <ul className='flex flex-col items-center mt-12 px-5 gap-4 font-medium'>
                <NavLink onClick={()=> setShowMenu(!showMenu)} to='/'>
                    <li className='text-3xl hover:bg-[var(--primary)] inline-block hover:text-white transition-all p-4 rounded-lg'>Home</li>
                </NavLink>
                <NavLink onClick={()=> setShowMenu(!showMenu)} to='/doctors'>
                    <li className='text-3xl hover:bg-[var(--primary)] inline-block hover:text-white transition-all p-4 rounded-lg'>All Doctors</li>
                </NavLink>
                <NavLink onClick={()=> setShowMenu(!showMenu)} to='/about'>
                    <li className='text-3xl hover:bg-[var(--primary)] inline-block hover:text-white transition-all p-4 rounded-lg'>About</li>
                </NavLink>
                <NavLink onClick={()=> setShowMenu(!showMenu)} to='/contact'>
                    <li className='text-3xl hover:bg-[var(--primary)] inline-block hover:text-white transition-all p-4 rounded-lg'>Contact</li>
                </NavLink>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar