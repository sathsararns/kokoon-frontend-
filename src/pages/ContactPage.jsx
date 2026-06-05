import React from 'react'
import Footer from '../components/Footer'
import { ContactSection } from '../components/ContactSection'
import  LocationMap  from '../components/LocationMap'

function ContactPage() {
  return (
    <div>
        <ContactSection/>
        <LocationMap/>
        <Footer/>
    </div>
  )
}

export default ContactPage