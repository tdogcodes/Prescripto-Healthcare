import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const MyProfile = () => {

  const [userdata, setUserdata] = useState({
    name: 'John Doe',
    image: assets.profile_pic,
    email: 'johndoe@gmail.com',
    phone:'+1 123-456-7890',
    address: {
      line1: '91234 Fairfax St',
      line2: '92637 Los Angeles, CA',
    },
    gender: 'male',
    dob: '07/14/1990',
  })

  const [edit, setEdit] = useState(true)

  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>MY <span className='text-gray-700 font-semibold'>PROFILE</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row text-sm gap-16 mb-28'>
        <img className='w-full h-full max-w-[340px] max-md:m-auto rounded-lg' src={userdata.image} alt="profile image" />

        <div className='flex flex-col justify-center max-md:items-center gap-3 text-gray-500'>
          <div className='flex items-center gap-2'>
            {edit ? <span><label className='text-sm text-[var(--primary)]' htmlFor='name'>Change Name </label> 
              <input className='border border-gray-500 rounded-md mt-1 p-1' type='text' value={userdata.name} name='name' onChange={(e)=> setUserdata((prev)=>({...prev, name:e.target.value}))} /></span> :
            <p className='text-2xl text-gray-800'>{userdata.name}</p>}
            <img onClick={()=> setEdit(!edit)} className='m-0 size-5' src={assets.edit_icon} alt="" />
          </div><hr/>
          <div className='flex flex-col text-lg gap-3'>
            <p>{userdata.email} <br/>             
            {edit ? <span><label className='text-sm text-[var(--primary)]' htmlFor='phone'>Change Phone </label> 
            <input className='border text-sm border-gray-500 rounded-md mt-1 p-1' type='text' value={userdata.phone} name='phone' onChange={(e)=> setUserdata((prev)=>({...prev, phone:e.target.value}))} /></span> :
            <p>{userdata.phone}</p>}</p>
            <hr/>
            <p>{edit ? <span><label className='text-sm text-[var(--primary)]'>Change Address </label> 
            <div className='flex sm:flex-col md:flex-row gap-1'>
              <input className='border text-sm border-gray-500 rounded-md mt-1 p-1' type='text' value={userdata.address.line1} onChange={(e)=> setUserdata((prev)=>({...prev, address: { ...prev.address, line1: e.target.value }}))} />
              <input className='border text-sm border-gray-500 rounded-md mt-1 p-1' type='text' value={userdata.address.line2} onChange={(e)=> setUserdata((prev)=>({...prev, address: { ...prev.address, line2: e.target.value }}))} />
            </div></span> :
            <p>{userdata.phone}</p>}</p>
            <hr/>
            <p>{edit ? <span><label className='text-sm text-[var(--primary)]' htmlFor='gender'>Change Gender </label> 
            <ul className='flex gap-1 mb-2'>
              <li onClick={()=> setUserdata(prev => ({ ...prev, gender: 'male' }))} className='text-sm border w-[130px] py-2 rounded-lg text-center text-white bg-[var(--primary)] hover:scale-105 transition-all cursor-pointer'>Male</li>
              <li onClick={()=> setUserdata(prev => ({ ...prev, gender: 'female' }))} className='text-sm border w-[130px] py-2 rounded-lg text-center text-white bg-[var(--primary)] hover:scale-105 transition-all cursor-pointer'>Female</li>
              <li onClick={()=> setUserdata(prev => ({ ...prev, gender: 'non-binary' }))} className='text-sm border w-[130px] py-2 rounded-lg text-center text-white bg-[var(--primary)] hover:scale-105 transition-all cursor-pointer'>Non-binary</li>
            </ul></span> :
            <p>{userdata.gender}</p>}
            <span className='max-sm:flex text-gray-600 max-sm:mt-2'>{userdata.dob}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile