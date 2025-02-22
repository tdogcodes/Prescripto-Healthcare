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
        {doctors.slice(0,2).map((item, i)=>(
          <div key={i}>
            <div>
              <img src={item.image} alt="doctors image" />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.speciality}</p>
              <p>Address</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p><span>Date & Time: </span>25, July, 2025 | 8:30</p>
            </div>
            <div></div>
            <div>
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