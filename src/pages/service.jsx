import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PageBanner from '../components/page-banner';
import Banner1 from '../assets/images/banner/page-banner.jpg';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Service() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Services | KP - India | Drive the Future</title>
          <meta name="description" content="Explore our services, where we are dedicated to delivering exceptional results for all your needs." />
        </Helmet>
        <Navbar />
        <PageBanner 
          title="Service" 
          subtitle="Dedicated to delivering exceptional results." 
          image={Banner1} 
        />
        <Footer />
      </>
    </HelmetProvider>
  );
}

export default Service;
