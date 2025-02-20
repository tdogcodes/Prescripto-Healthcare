import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
        <div className='flex justify-center items-center p-6 text-center text-2xl pt-10 text-gray-500'>
          <p className='mb-6'>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
        </div>

         <div className='flex max-sm:flex-col max-sm:items-center md:justify-around gap-6'>
            <div>
              <img className='w-100 rounded-lg mb-6' src={assets.about_image} alt="" />
            </div>
            
           <div className='flex flex-col items-center justify-center gap-6 px-6 max-w-[50%] max-sm:max-w-full text-gray-800 text-lg'>
              <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently.
                 At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
              <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to
                 improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
              <span className='text-2xl text-gray-800 font-medium'>Our Vision</span>
              <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers,
                 making it easier for you to access the care you need, when you need it.</p>
           </div>
       </div>
       
        <span className='flex items-center justify-center py-12 text-2xl'> Why&nbsp;<span className='text-2xl text-gray-800 font-medium'>Choose Us?</span></span>

          <div className='flex max-sm:flex-col justify-center items-center'>
            <div className='border max-sm:h-60 md:h-80 lg:h-auto w-full p-20 border-gray-300 hover:bg-[var(--primary)] hover:text-white transition-all duration-500 hover:scale-103'>
              <span className='font-semibold'>EFFICIENCY:</span>
              <p className='pt-3'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
            </div>
            <div className='border max-sm:h-60 md:h-80 lg:h-auto w-full p-20 border-gray-300 hover:bg-[var(--primary)] hover:text-white transition-all duration-500 hover:scale-103'>
              <span className='font-semibold'>CONVENIENCE:</span>
              <p className='pt-3'>Access to a network of trusted healthcare professionals in your area.</p>
            </div>
            <div className='border max-sm:h-60 md:h-80 lg:h-auto w-full p-20 border-gray-300 hover:bg-[var(--primary)] hover:text-white transition-all duration-500 hover:scale-103'>
              <span className='font-semibold'>PERSONALIZATION:</span>
              <p className='pt-3'>Tailored recommendations and reminders to help you stay on top of your health.</p>
            </div>
          </div>
    </div>
  )
}

export default About