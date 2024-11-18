import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import PageBannner from '../components/page-banner'
import Banner2 from '../assets/images/banner/about-3.jpg'
import VisionMission from '../components/vision-mission'
import Team from '../components/team'
function About() {
  return (
    <>
      <Navbar/>
      <PageBannner title="About Our Company" subtitle="Dedicated to delivering exceptional results." image={Banner2} />
      <VisionMission/>
      <Team/>
      <Footer/>
    </>
  )
}

export default About
