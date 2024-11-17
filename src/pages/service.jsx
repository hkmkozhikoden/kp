import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import PageBannner from '../components/page-banner'
import Banner1 from '../assets/images/banner/page-banner.jpg'
function Service() {
  return (
    <>
    <Navbar/>
    <PageBannner 
      title="Service" 
      subtitle="Dedicated to delivering exceptional results." 
      image={Banner1} 
    />
    <Footer/>
      
    </>
  )
}

export default Service
