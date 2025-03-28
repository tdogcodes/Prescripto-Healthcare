import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

  const navigate = useNavigate();

  return (
    <div className='flex bg-[var(--primary)] rounded-lg px-6 sm:px-10 
    md:px-14 lg:px-12 my-20 md:mx-10'>
      {/* Left Side */}
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div className='text-3xl md:text-4xl lg:text-5xl text-white 
        font-bold leading-tight md:leading-tight lg:leading-tight'>
          <p>Book Appointments</p>
          <p>With 100+ Trusted Doctors</p>
        </div>
        <button onClick={()=> {navigate('/login'); scrollTo(0,0)}} aria-label='create account' className='flex items-center gap-2 bg-white py-3 mt-6 
        px-8 rounded-full text-gray-600 md:mx-0 text-sm m-auto 
        hover:scale-105 transition-all duration-300'>Create Account</button>
      </div>
      {/* Right Side */}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='w-full absolute bottom-0 right-0 max-w-md'
         src={assets.appointment_img} alt="doctor pointing" />
      </div>
    </div>
  )
}

export default Banner