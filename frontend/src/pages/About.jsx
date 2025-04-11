{/*necessary imports */}
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      {/*About us Title */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      {/*About us content */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.EmilioLinkedInPic} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>MusicStop was created for musicans by musicians. As musicians we understand the unsure process of selecting the right instrument, we are here to make it easy!</p>
          <p>This establishment started in 2020 in hopes to provide the right instruments for beginner to advanced musicians</p>
          <p>To contact us please visit our contact page located at the top of the website.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>MusicStop puts its customers first making sure to satisfy everyone and every need. If needs are not met, MusicStop will do it's absolute best to fullfill that need.</p>
        </div>
      </div>
      {/*Why Choose Us Title */}
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      {/*Why Choose Us content */}
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Our instruments are of top quality, made with the best materials, supplied from various sources. We make sure to carefully test each instrument with a certified quality test before selling to our customers!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Given our Easy Exchange Policy, Great Customer Support, and 30-day Return Policy we make sure that MusicStop is convenient for even the most anxious buyers! </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our customer service is of top tier! Communication is guaranteed within minutes and customers are satisfied in the same time frame! Our team works 24/7 making sure you are happy! </p>
        </div>
      </div>
      
      {/*Newsletter Box */}
      <NewsletterBox />

    </div>
  )
}

export default About
