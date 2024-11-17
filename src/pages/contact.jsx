import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import PageBannner from '../components/page-banner'
import Banner1 from '../assets/images/banner/contact-banner.jpg'
function Contact() {
  return (
    <>
      <Navbar/>
      <PageBannner 
      title="Contact" 
      subtitle="Dedicated to delivering exceptional results." 
      image={Banner1} 
      />
      <Footer/>
    </>
  )
}

export default Contact
