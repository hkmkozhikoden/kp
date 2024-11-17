import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import PageBannner from '../components/page-banner'
import Banner2 from '../assets/images/banner/about-3.jpg'
function About() {
  return (
    <>
      <Navbar/>
      <PageBannner 
      title="About Our Company" 
      subtitle="Dedicated to delivering exceptional results." 
      image={Banner2} 
      />
      <Footer/>
    </>
  )
}

export default About
