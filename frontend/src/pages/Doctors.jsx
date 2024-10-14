import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Doctors = () => {

  const {speciality} = useParams()   // it will get the speciality from the url 
  const [filterDoc, setFilterDoc] = useState([])
  const {doctors} = useContext(AppContext)
  const navigate = useNavigate();

  const filterDoctors = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    filterDoctors();
  }, [doctors, speciality]);

  return (
    <div>
      <p className='text-green-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className=' flex flex-col gap-4 text-sm text-green-900'>
          <p onClick={()=> speciality=== 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-green-100 text-green" : ""}`}>General Physician</p>
          <p onClick={()=> speciality=== 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-green-100 text-green" : ""}`}>Gynecologist</p>
          <p onClick={()=> speciality=== 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-green-100 text-green" : ""}`}>Dermatologist</p>
          <p onClick={()=> speciality=== 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-green-100 text-green" : ""}`}>Pediatricians</p>
          <p onClick={()=> speciality=== 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-green-100 text-green" : ""}`}>Neurologist</p>
          <p onClick={()=> speciality=== 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-green-100 text-green" : ""}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className='border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'>
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
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors