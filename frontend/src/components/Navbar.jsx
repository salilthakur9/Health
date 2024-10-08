import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();
    const [showMenu, setshowMenu]= useState(false);
    const [token, settoken]= useState(true);

  return (
    <div className='flex item-center justify-between text-sm py-4 mb-5 border-b border-b-green-400'>
        <img style={{ width: '125px', height: '40px' }} className='w-44 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuN0ER80knaKBm7m-gDsQdlLTxHxPMo1o3Wg&s" alt="" />
        <ul className='hidden md:flex item-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
        </ul>
        <div className='flex item-center gap-4'>
            {
                token ? <div className='flex item-center gap-2 cursor-pointer group relative'>
                    <img className='w-11 rounded-full' src={assets.profile_pic} alt='' />
                    <img className='w-2.5 ' src={assets.dropdown_icon} alt='' />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-green-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                            <p onClick={()=>settoken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
                :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>

            }

        </div>
    </div>
  )
}

export default Navbar