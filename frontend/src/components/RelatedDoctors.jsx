import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext)
  const [relDoc, setRelDocs] = useState([]) 
  const navigate = useNavigate()  // Add useNavigate hook

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(doc => doc.speciality === speciality && doc._id !== docId)
      setRelDocs(doctorsData)
    }
  }, [doctors, speciality, docId])

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-green-900 md:nx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {relDoc.slice(0, 10).map((item) => (
          <div
            key={item._id}
            onClick={() => {navigate(`/appointments/${item._id}`); scrollTo(0, 0)}}  // Navigate to doctor appointment
            className='border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
          >
            <img className='bg-green-50' src={item.image} alt={item.name} />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                <p>Available</p>
              </div>
              <p className='text-green-900 text-lg font-medium'>{item.name}</p>
              <p className='text-green-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate('/doctors')  // Navigate to the doctors listing page
          window.scrollTo(0, 0)  // Scroll to top
        }}
        className='bg-green-100 text-green-600 px-12 py-3 rounded-full mt-10'
      >
        More
      </button>
    </div>
  )
}

export default RelatedDoctors
