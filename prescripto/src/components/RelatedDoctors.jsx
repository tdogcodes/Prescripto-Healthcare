import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality, docId}) => {

  const {doctors} = useContext(AppContext)
  const navigate = useNavigate()

  const [ relDoc, setRelDoc ] = useState([])

  useEffect(()=> {
    if(doctors.length > 0 && speciality){
      const doctorData = doctors.filter((doc)=> doc.speciality === speciality && doc._id !== docId )
      setRelDoc(doctorData)
    }
  },[doctors, speciality, docId])

  return (
    <div className='flex flex-col items-center my-16 gap-4 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>Browse through our extensive list of top doctors.</p>
        <div className='w-full grid grid-cols-[var(--auto)] gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {relDoc.slice(0,5).map((item)=>(
                <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0) }} className='border border-blue-200 
                rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] 
                transition-all duration-500' key={item.name} to={`/doctors/${item._id}`}>
                    <img className='bg-blue-200' src={item.image} alt="doctor picture" />
                    <div className='p-4'>
                        <div className='flex items-center text-sm gap-2 text-center text-green-500'>
                        <p className='w-2 h-2 bg-green-500 rounded-full relative'></p>
                        <p className='w-2 h-2 bg-green-500 rounded-full animate-ping absolute'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button className='bg-[var(--primary)] text-white px-8 py-3 rounded-full font-light 
        cursor-pointer hover:scale-105 transition-all duration-300' onClick={() => {navigate('/doctors'); scrollTo(0,0)}}>more</button>
    </div>
  )
}

export default RelatedDoctors