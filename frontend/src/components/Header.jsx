import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      
      {/*----- Left side (Text) -----*/}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className='flex flex-col md:flex-row item-center gap-3 text-white text-sm font-light'>
        <img className='w-28' src={assets.group_profiles} />
          <p className='text-white text-sm md:text-base lg:text-lg'>
            It’s about empowering patients with better choices and advanced care
            <br className='hidden sm:block' />
            to healthcare professionals, making the journey more aligned.
          </p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-green-600 text-sm hover:scale-105 transition-all duration-300'>
          Book Appointment
          <img src={assets.arrow_icon} alt='arrow' className='ml-2' />
        </a>
      </div>

      {/*----- Right side (Image) -----*/}
      <div className='md:w-1/2 flex justify-center items-center relative'>
        <img className='w-full md:w-auto md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt='Header Image' />
      </div>
    </div>
  )
}

export default Header
