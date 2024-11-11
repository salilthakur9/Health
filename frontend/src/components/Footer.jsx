import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*---left----*/}
            <div>
            <img onClick={() => {navigate('/'); window.scrollTo(0, 0);}}className='mb-5 w-40' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuN0ER80knaKBm7m-gDsQdlLTxHxPMo1o3Wg&s" alt=""/>
                <p className='w-full md:w-2/3 text-green-600 leading-0'>HealthSphere is dedicated to providing seamless healthcare management by connecting patients, doctors, and administrators through a user-friendly platform. Our mission is to simplify appointment booking, enhance doctor-patient communication, and streamline hospital operations. We prioritize security, privacy, and ease of use, ensuring that every user has a smooth and efficient experience with our services. Stay connected with us for updates and support!</p>
            </div>

            {/*---mid----*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-green-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/*---right----*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-green-600'>
                    <li>1234567890</li>
                    <li>help@healthsphere.com</li>
                </ul>
            </div>
        </div>
        <div>
            {/*---copyright---*/}
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Health-Sphere - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer