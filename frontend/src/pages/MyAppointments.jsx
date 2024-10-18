import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {


const {doctors} = useContext(AppContext)

  return (
    <div className='pb-3 mt-12 font-medium text-green-700 border-b'>
      <p >My Appointments</p>
      <div>
        {doctors.slice(0,3).map((item, index)=>(
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-32 bg-green-50' src={item.image} alt='' />
            </div>
            <div className='flex-1 text-sm text-green-600'>
              <p className='text-green-800 font-semibold'>{item.name}</p>
              <p>{item.speciality}</p>
              <p className='text-green-700 font-medium mt-1'>Address</p>
              <p className='text-xs'>{item.address.line1}</p>
              <p className='text-xs'>{item.address.line2}</p>
              <p className='text-sm mt-1'><span className='text-sm text-green-700 font-medium'>Date & Time</span> 18, oct, 2024 |  8:30 PM</p>
            </div>
            <div>

            </div>
            <div className='flex flex-col gap-2 justify-end'>
              <button className='text-sm text-green-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white tansition-all duration-300'>Pay Online</button>
              <button className='text-sm text-green-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-500 hover:text-white tansition-all duration-300'>Cancel Appointment</button>
            </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments