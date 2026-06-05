import React from 'react'
import Footer from '../components/Footer'
import { ContactSection } from '../components/ContactSection'
import  LocationMap  from '../components/LocationMap'
import Navbar from '../components/Navbar'

function ContactPage() {
  return (
    <div>
        <Navbar/>
        <ContactSection/>
        <LocationMap/>
        <Footer/>
    </div>
  )
}

export default ContactPage