import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import HomeComponent from './HomeComponent'

const Homepage = () => {
  return (
    <>
      <Navbar/>
  <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-20 pb-6 md:pb-10">

        <Hero/>   
        <HomeComponent/>   
      </div>

    </>
  )
}

export default Homepage
