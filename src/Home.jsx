import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './components/ui/button'
import Header from './components/Header'
import Category from './components/Category'
import Hero from './components/Hero'
import MostSearchedCar from './components/MostSearchedCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

function home() {
  return (
    <div>
        {/* <img src='/logo.svg' alt='Company' width={100} height={100}/> */}
      <Header/>
      <Hero/>
      <Category/>
      <MostSearchedCar/>
      <InfoSection/>
      <Footer/>
    </div>
  )
}

export default home