import React from 'react'

{/* NewsletterBox component is used to display the newsletter and subscription form box.*/}
const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className=' text-center'>
        <p className='text-2xl font-medium text-gray-800'>SUBSCRIBE NOW & get 25% off any product!</p>
        <p className='text-gray-700 mt-3'>
            Subscribe to our newsletter and get the latest updates on our new arrivals, sales, and special offers.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 m-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline:none' type="email" placeholder='Enter your email address' required/>
            <button type='submit' className='bg-black text-white py-4 px-10'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox
