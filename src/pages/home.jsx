import React from 'react';
import Navbar from '../components/navbar';
import HomeBanner from '../components/banner';
import HomeNews from '../components/home-news';
import Footer from '../components/footer';
import HomeService from '../components/home-service';
import HomeUpdates from '../components/home-updates';
import HomeContact from '../components/home-contact';

function Home() {
  return (
    <div>
      <Navbar/>
      <HomeBanner/>
      <HomeNews/>
      <HomeService/>
      <HomeUpdates/>
      <HomeContact/>
      <Footer/>
    </div>
  )
}

export default Home
