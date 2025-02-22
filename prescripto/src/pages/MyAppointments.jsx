import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const MyAppointments = () => {

  const { doctors } = useContext(AppContext)
  
  return (
    <div>
      <p className='pb-3 mt-12 font-medium border-b border-gray-300 text-gray-500'>
        My appointments
      </p>
      <div>
        {doctors.slice(0,3).map((item)=>(
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-4 py-2 border-b border-gray-300' key={item.name}>
            <div>
              <img className='w-32 bg-indigo-50' src={item.image} alt="doctors image" />
            </div>
            <div className='flex-1 text-sm text-gray-500'>
              <p className='text-neutral-800 font-semibold'>{item.name}</p>
              <p>{item.speciality}</p>
              <p className='text-gray-800 font-medium mt-1'>Address</p>
              <p className='text-xs'>{item.address.line1}</p>
              <p className='text-xs'>{item.address.line2}</p>
              <p className='text-sm mt-1'><span className='text-sm font-medium text-gray-800'>Date & Time: </span>25, July, 2025 | 8:30</p>
            </div>
            <div></div>
            <div className='flex gap-2 justify-center items-center'>
              <button className='bg-[var(--primary)] text-white px-8 py-3 rounded-full font-light 
              cursor-pointer hover:scale-105 transition-all duration-300'>Pay online</button>
              <button className='bg-[white] text-gray-800 border border-gray-800 px-8 py-3 rounded-full font-light 
              cursor-pointer hover:scale-105 transition-all duration-300'>Cancel</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments