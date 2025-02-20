import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row text-sm gap-10 mb-28'>
        <img className='w-full max-w-[360px] max-md:m-auto rounded-lg' src={assets.contact_image} alt="contact image" />

        <div className='flex flex-col justify-center max-md:items-center gap-6 text-gray-500'>
          <p className='text-lg font-semibold text-gray-800'>OUR OFFICE</p>
          <p>00000 Willms Station <br/>
          Suite 000, Washington, USA</p>
          <p>Tel: (000) 000-0000 <br/>
          Email: greatstackdev@gmail.com</p>
          <p className='text-lg font-semibold text-gray-800'>CAREERS AT PRESCRIPTO</p>
          <p>Learn more about our teams and job openings.</p>
          <button className='border m-auto text-gray-800 border-gray-800 w-fit p-4 hover:bg-[var(--primary)] hover:text-white transition-all duration-500 hover:scale-105'>Explore Jobs</button>
        </div>

      </div>
    </div>
  )
}

export default Contact