import React from 'react'
import NavBar from "../components/NavBar"
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import Form from '../components/Form';
const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImage2 heading="Contact ME" text="get in touch" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact;