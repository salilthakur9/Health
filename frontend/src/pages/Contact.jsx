import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
    <div className='text-center text-2xl pt-10 text-green-500'>
      <p>CONTACT <span className='text-green-800 font-semibold'>US</span></p>
    </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
      <img className='w-full md:max-w-[360px]' src={assets.contact_image} />
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-lg text-green-600'>OUR OFFICE</p>
        <p className='text-green-500'>Chitkara University <br />Rajpura, Punjab, INDIA</p>
        <p className='text-green-500'>Tel: +91 1234567890 <br />Email: health@healthsphere.com</p>
        <p className='font-semibold text-lg text-green-600'>Careers at Health-Sphere</p>
        <p className='text-green-500'>Learn more about our team and job openings</p>
        <button className='border border-green-800 px-8 py-4 text-green-800 text-sm hover:bg-green-800 hover:text-white transition-all duration-300'>Explore Jobs</button>
      </div>
    </div>
    </div>
  )
}

export default Contact