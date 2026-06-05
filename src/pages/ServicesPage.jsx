import React from 'react'
import ServicesList from '../components/ServicesList'
import Footer from '../components/Footer'
import ContactCTA from '../components/ContactCTA'
import Navbar from '../components/Navbar'

function ServicesPage() {
  return (
    <div>
      <Navbar/>
        <ServicesList/>
        <ContactCTA/>
        <Footer/>
    </div>
  )
}

export default ServicesPage