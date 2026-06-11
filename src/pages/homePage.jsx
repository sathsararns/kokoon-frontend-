import React from 'react'
import  Navbar  from '../components/Navbar'
 import HeroGrid from '../components/HeroGrid'
import ServicesSection from '../components/ServicesSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div>
      <Navbar/> 
      <HeroGrid/>
      <ServicesSection/>
      <FAQSection/>
      <Footer/>
        
    </div>
  )
}

export default HomePage