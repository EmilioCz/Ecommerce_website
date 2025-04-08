import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-20' alt="" />
            <p className='w-full md:w-2/4 text-gray-600'>
            E-Commerce Project :: Emilio Cervantez
            </p>

            
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <u1 className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </u1>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-806-777-7777</li>
                <li>emcervan@ttu.edu</li>
            </ul>
        </div>
        
      </div>

        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2025@ MusicStop.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
