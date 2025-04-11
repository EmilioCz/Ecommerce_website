{/* necessary imports such as React and assets */}
import React from 'react'
import { assets } from '../assets/assets'

{/* OurPolicy component is used to display the policy information such as easy exchange, 30 day return, and great customer support.*/}
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text:xs sm:text-sm md:text-base text-gray-700'>

        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className=' text-gray-500'>We offer a hassle-free exchange policy</p>
        </div>

        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>30 Day Return Policy</p>
            <p className=' text-gray-500'>We offer a pain-free return policy</p>
        </div>

        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Great Customer Support</p>
            <p className=' text-gray-500'>We offer stress-free customer support</p>
        </div>
    </div>

  )
}

export default OurPolicy
