import React, {  useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { specialityData } from '../assets/assets_frontend/assets';

const Doctors = () => {

    const { speciality } = useParams()
    const [ filterDoc, setFilterDoc ] = useState([]);
    const navigate = useNavigate();

    const { doctors } = useContext(AppContext)

    const applyFilter= () => {
      if(speciality){
        setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
      } else{
        setFilterDoc(doctors)
      }
    }

    useEffect(()=> {
      applyFilter()
    },[doctors, speciality])


  return (
    <div>
      <p className='text-3xl text-gray-600 font-medium'>Browse by the doctor's specialty.</p>
      <div className='flex flex-col md:flex-row items-start gap-5 mt-5'>
        {/* Left Side */}
        <div className='flex flex-col gap-3 text-sm text-gray-600'>
          {specialityData.map((item)=>(
            <div className={`w-[9vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300
              rounded-lg transition-all hover:scale-105 cursor-pointer ${item.speciality === speciality ? 'bg-blue-200 text-black' : ''}`}
               key={item.speciality} onClick={()=> item.speciality === '' ? navigate('/doctors'): navigate(`/doctors/${item.speciality}`)}>{item.speciality}</div>
          ))}
        </div>
        {/* Right Side */}
        <div className='w-full grid grid-cols-[var(--auto)] gap-4 gap-y-6'>
           {
            filterDoc.map((item)=>(
              <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 
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
          ))
           }
        </div>
      </div>
    </div>
  )
}

export default Doctors
