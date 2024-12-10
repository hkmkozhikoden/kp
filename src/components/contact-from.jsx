import React from 'react';
import '../assets/style/css/contact-form.css';

function ContactForm() {
  return (
  <div className='contact-main-card'>
    <section className="contact-form-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-7 mb-3 mb-md-0">
            <div className="contact-info">
              <div className="row">
                <div className="col-12">
                  <h4 className="font-medium mb-3">
                    Have a Creative Challenge? Let’s Solve It Together!
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur necessitatibus reprehenderit
                    impedit inventore vero doloremque architecto debitis facilis sunt quod?
                  </p>
                </div>
                <div className="col-12">
                  <h5 className="my-2">Corporate Address</h5>
                  <a>
                  Mona Enclave, Sannatammanahalli, <br /> Battarahalli,  Bengaluru, <br />   Karnataka <br /> 560049
                  </a>
                </div>
                <div className="col-12">
                  <h5 className="my-2">Mail Us</h5>
                  <a href="mailto:admin@kppcs.com">admin@kppcs.com</a>
                </div>
                <div className="col-12">
                  <h5 className="my-2">Telephone</h5>
                  <a href="tel:+91 8606065001">+91 86060 65001</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-5 mb-3 mb-md-0">
            <div className="contact-form">
              <form action="#" method="POST">
                <div className="row text-start">
                  <div className="col-12">
                    <h5 className="font-bold">Get In Touch</h5>
                    <p className="fs-16 mb-2">How can I help you?</p>
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      className="form-control mt-2"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      className="form-control mt-2"
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      className="form-control mt-2"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Enter your message..."
                      id="message"
                      name="message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 mt-3">
                    <button type="submit" className="btn btn-submit">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
    </section>
    <section className='py-0'>
       <iframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1759565600405!2d77.7072675!3d13.024464399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11000bcd07cd%3A0x28024596209046f5!2sKP%20Consulting!5e0!3m2!1sen!2sin!4v1733845642712!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  </div>
  );
}

export default ContactForm;
