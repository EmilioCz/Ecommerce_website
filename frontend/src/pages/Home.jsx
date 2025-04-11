{/*necessary imports */}
import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

{/* Home component renders the main page of the website and organizes in a logical structure (top to bottom) that is easy for the user 
  utilizing Hero, LatestCollection, BestSeller, OurPolicy, and NewsletterBox components*/}
const Home = () => {
  return (
    <div>
      <Hero /> 
      <LatestCollection/>
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home
