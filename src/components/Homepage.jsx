import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import HomeComponent from './HomeComponent'

const Homepage = () => {
  return (
    <>
      <Navbar/>
  <div className="max-w-7xl mx-auto px-4 md:px-8 my-6 md:my-10">

        <Hero/>   
        <HomeComponent/>   
      </div>

    </>
  )
}

export default Homepage
