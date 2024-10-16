import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-green-500'>
        <p>ABOUT <span className='text-green-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-green-800'>
          <p><span className='text-2xl'>W</span>elcome To HealthSphere, Your Trusted Partner In Managing Your Healthcare Needs With Ease And Efficiency. At HealthSphere, We Understand The Challenges Individuals Face When Scheduling Doctor Appointments And Managing Health Records. That's Why We've Crafted A Platform That Streamlines These Essential Tasks, Putting Control Of Your Health At Your Fingertips.</p>
          <p>HealthSphere Is Committed To Excellence In Healthcare Technology. We Continuously Strive To Enhance Our Platform, Integrating The Latest Advancements To Improve User Experience And Deliver Superior Service. Whether You're Booking Your First Appointment Or Managing Ongoing Care, HealthSphere Is Here To Support You Every Step Of The Way.</p>
          <p className='text-green-800'>Our Vision</p>
          <p>Our Vision At HealthSphere Is To Create A Seamless Healthcare Experience For Every User. We Aim To Bridge The Gap Between Patients And Healthcare Providers, Making It Easier For You To Access The Care You Need, Whenever You Need It.</p>
        </div>
      </div>
      <div className='text-center mt-16'>
        <p className='text-2xl text-green-500 font-medium'>WHY <span className='text-green-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='grid md:grid-cols-3 gap-6 mt-8'>
        
        <div className='border border-green-200 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300'>
          <b className='text-lg text-green-700'>Efficiency</b>
          <p className='text-green-600 mt-2'>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
        </div>

        <div className='border border-green-200 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300'>
          <b className='text-lg text-green-700'>Convenience</b>
          <p className='text-green-600 mt-2'>Access To A Network Of Trusted Healthcare Professionals In Your Area.</p>
        </div>

        <div className='border border-green-200 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300'>
          <b className='text-lg text-green-700'>Personalization</b>
          <p className='text-green-600 mt-2'>Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health.</p>
        </div>

      </div>
    </div>
  )
}

export default About