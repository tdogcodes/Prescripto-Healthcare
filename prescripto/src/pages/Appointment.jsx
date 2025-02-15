import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_frontend/assets'

const Appointment = () => {

  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    if (!docInfo) return;

    let today = new Date();
    let allSlots = [];

    for (let i = 1; i < 8; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        // If it's today, start from the current time + 1 hour
        currentDate.setHours(currentDate.getHours() + 1);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        // For future days, start from 10:00 AM
        currentDate.setHours(10, 0, 0, 0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // Increment time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push(timeSlots);
    }

    setDocSlots(allSlots);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return docInfo && (
    <div>
      {/* ----- Doctor Details ------ */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
            <img className='bg-[var(--primary)] w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt=""/>
        </div>
        <div className='flex-1 border border-gray-400 p-8 py-7 bg-white rounded-lg mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* ----- Doctor Info: name, degree, experience ------ */}
          <p className='flex items-center gap-2 font-medium text-2xl text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border rounded-full text-xs'>{docInfo.experience}</button>
          </div>
          {/* ----- Doctor About ------ */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium mt-3 text-gray-900'>About <img src={assets.info_icon} alt="" /></p>
            <p className=' max-w-[700px] gap-1 text-sm font-medium mt-1 text-gray-600'>{docInfo.about}</p>
          </div>
          <p className='text-gray-800 font-medium mt-4'>
            Appointment fee: <span className='text-gray-500'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking slots</p>
        <div className='flex max-sm:ml-7 gap-3 items-center w-full overflow-x-scroll flex-wrap mt-4'>
          {docSlots.length && docSlots.map((item, i)=>(
            <div onClick={()=> setSlotIndex(i)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer 
            ${slotIndex === i ? 'bg-[var(--primary)] text-white' : 'border border-gray-400'}`} key={item.datetime}>
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'
         style={{maskImage: 'linear-gradient(to left, transparent, black 10%, black 100%, transparent)'}}>
          {docSlots.length && docSlots[slotIndex].map((item)=> (
            <p onClick={()=> setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full border cursor-pointer
              ${item.time === slotTime ? 'bg-[var(--primary)] text-white' : 'text-gray-400'}`} key={item.datetime}>{
              item.time.toLowerCase()
            }</p>
          ))}
        </div>
        <button className='bg-[var(--primary)] my-6 text-white px-8 py-3 rounded-full font-light 
        cursor-pointer hover:scale-105 transition-all duration-300'>Book an appointment</button>
      </div>
    </div>
  )
}

export default Appointment