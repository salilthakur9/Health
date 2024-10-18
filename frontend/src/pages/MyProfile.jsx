import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Salil Thakur",
    image: assets.new_image, 
    email: "salil@gmail.com",
    phone: '1234567890',
    address: {
      line1: "Chitkara University",
      line2: "Rajpura"
    },
    gender: "male",
    dob: "9/4/05",
  });

  const [isEdit, setIsEdit] = useState(false);
  
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="Profile" />
      {
        isEdit ? 
        <input className='bg-green-100 text-3xl font-medium max-w-60 mt-4' 
          type='text' 
          value={userData.name} 
          onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} 
        /> 
        : <p className='font-medium text-3xl text-green-800 mt-4'>{userData.name}</p>
      }
      <hr className='bg-green-400 h-[1px] border-none' />
      <div>
        <p className='text-green-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-green-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-400'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
        isEdit ? 
        <input 
          type='text' className='bg-green-100 max-w-52' 
          value={userData.phone} 
          onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} 
        /> 
        : <p className='text-blue-400'>{userData.phone}</p>
      }
      <p className='font-medium'>Address:</p>
      {
        isEdit ? 
        <p><input className='bg-green-100' onChange={(e)=>setUserData(prev=>({...prev, address: { ...prev.address, line1: e.target.value }}))} value={userData.address.line1} type="text" />
        <br />
        <input className='bg-green-100' onChange={(e)=>setUserData(prev=>({...prev, address: { ...prev.address, line2: e.target.value }}))} value={userData.address.line2} type="text" /></p>
        : 
        <p className='text-green-500'>{userData.address.line1}<br />{userData.address.line2}</p>
      }
        </div>
      </div>
      <div>
        <p className='text-green-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-green-700'>
          <p className='font-medium'>Gender:</p>
          {
        isEdit ? 
        <select className='max-w-28 bg-green-100' onChange={(e)=> setUserData(prev=>({...prev, gender:e.target.value}))} value={userData.gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        : <p className='text-green-500'>{userData.gender}</p>
      }
      <p className='font-medium'>Birthday:</p>
      {
        isEdit ? 
        <input className='max-w-28 bg-green-100' type="date" onChange={(e)=>setUserData(prev=>({...prev, dob: e.target.value}))} value={userData.dob} /> 
        : <p className='text-green-500'>{userData.dob}</p>
      }
        </div>
      </div>
      <div className='mt-10'>
        {
          isEdit 
          ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(false)}>Save Information</button>
          : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile;
