import React from 'react'
import ServicesList from '../components/ServicesList'
import Footer from '../components/Footer'
import ContactCTA from '../components/ContactCTA'

function ServicesPage() {
  return (
    <div>
        <ServicesList/>
        <ContactCTA/>
        <Footer/>
    </div>
  )
}

export default ServicesPage