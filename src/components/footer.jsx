import React from 'react'
import Logo from "../assets/images/logo/logo.png";
import '../assets/style/css/footer.css';
function Footer() {
  return (
    <footer className='footer'>
    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <a href="#" className='mb-3 d-flex align-items-center'>
                    <img className='logo' src={Logo} alt="" />
                   <div className='d-block mt-3'>
                   <div className='text-white text-uppercase'>Consulting</div>
                   <div className='text-white text-uppercase lp-2'>Service</div>
                   </div>
                </a>
                <p className='mb-1 text-m-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iste voluptates non quaerat deserunt in repellat corporis ratione quibusdam repellendus.
                </p>
            </div>
            <div className="col-md-3 text-md-center">
              <h5>Quick Links</h5>
              <ul className='menu p-0'>
                <li className='link-items'>
                  <a className='link' href={"/"}>Home</a>
                </li>
                <li className='link-items'>
                  <a className='link' href={"/about"}>About</a>
                </li>
                <li className='link-items'>
                  <a className='link' href={"/service"}>Service</a>
                </li>
                <li className='link-items'>
                  <a className='link' href={"/contact"}>Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
            <ul className='contact-right p-0 p-md-auto'>
              <li>
                 <div className="">
                   <a>lorem content <br />
                     lorem contenrt (PO) <br />
                     banglure (DT) <br />
                     karnataka, India
                     534434
                   </a>
                 </div>
              </li>
              <li>
                <div className="">
                 <a className='d-block' href="+91 99999999">+91 999999999</a>
                {/* <a className='d-block' href="tel:+91 98460 07257">+91 6282 014 275</a> */}
                </div>
              </li>
              <li>
                <div className="">
                 <a className='d-block' href="mailto:lorem@gmail.com">lorem gmail@gmail.com</a>
                 <a className='d-block' href="#">loremgmail.com</a>
                </div>
              </li>
            </ul>
            </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer
