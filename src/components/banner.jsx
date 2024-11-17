import React from 'react';
import Banner1 from "../assets/images/banner/2.jpg"
import { Link } from "react-router-dom";
import '../assets/style/css/banner.css'
function HomeBanner() {
  return (
    <div>
      <section className='home-banner'>
        <div className="banner-cover position-relative overflow-hidden">
            <div className="banner-content">
               <div className="container">
                 <div className="row">
                    <div className="col-md-6" data-aos="fade-down" data-aos-offset="10">
                    <h1 className="text-xl-semibold mb-3">Excellence Through <br /> Innovation</h1>
                    <Link to='/contact' className="btn-banner text-black mt-3">Book a meeting</Link>
                    </div>
                 </div>
               </div>
            </div>
            <img className='banner' src={Banner1} alt="" />
        </div>
      </section>
    </div>
  )
}

export default HomeBanner
