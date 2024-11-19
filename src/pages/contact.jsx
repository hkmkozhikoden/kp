import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PageBannner from '../components/page-banner';
import Banner1 from '../assets/images/banner/contact-banner.jpg';
import ContactForm from '../components/contact-from';
function Contact() {
  return (
    <div className='contact-main'>
      <Navbar/>
      <PageBannner className="" title="Contact" subtitle="Dedicated to delivering exceptional results." image={Banner1} />
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
