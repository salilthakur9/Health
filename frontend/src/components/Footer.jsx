import React from 'react'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*---left----*/}
            <div>
                <img className='mb-5 w-40' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuN0ER80knaKBm7m-gDsQdlLTxHxPMo1o3Wg&s" alt="" />
                <p className='w-full md:w-2/3 text-green-600 leading-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel impedit inventore eos porro, saepe optio assumenda, pariatur tempore fugit nam ipsam soluta dolorum aliquid. Reprehenderit rem unde, amet voluptates laborum repellendus reiciendis voluptate doloribus. Omnis, explicabo. Assumenda voluptatem dolorum quisquam! Dolor corrupti nesciunt illum et similique temporibus animi consectetur veritatis.</p>
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
                    <li>salil@gmail.com</li>
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