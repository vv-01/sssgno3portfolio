import React from 'react'
import NavBar from "../components/NavBar"
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import Card from '../components/Card';
const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImage2 heading="PROJECTS" text="Some of the services offered" />
      <Card />
      <Footer />
    </div>
  )
}

export default Project;