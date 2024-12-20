import React from 'react';
import Slider from 'react-slick'; 
import '../assets/style/css/home-update.css';
import Card1 from "../assets/images/banner/2.jpg";
import Card2 from "../assets/images/banner/protfolio1.jpg";
import Card3 from "../assets/images/banner/protfolio.jpg";
import Card4 from "../assets/images/banner/service-banner.jpg";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function HomeUpdates() {
  const updates = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, harum!",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas soluta possimus ipsa iusto atque ab, vitae illum quas quaerat ea aliquam autem aut voluptates molestiae voluptatem magnam nemo exercitationem quisquam.",
      date: "19 Nov 2024",
      location: "Kerala | IND",
      author: "KP",
      image: Card1,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, harum!",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas soluta possimus ipsa iusto atque ab, vitae illum quas quaerat ea aliquam autem aut voluptates molestiae voluptatem magnam nemo exercitationem quisquam.",
      date: "19 Nov 2024",
      location: "Delhi | IND",
      author: "AD",
      image: Card3,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, harum!",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas soluta possimus ipsa iusto atque ab, vitae illum quas quaerat ea aliquam autem aut voluptates molestiae voluptatem magnam nemo exercitationem quisquam.",
      date: "19 Nov 2024",
      location: "Delhi | IND",
      author: "AD",
      image: Card4,
    },
  ];

  const rightCards = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: "19 Nov 2024",
      location: "Kerala | IND",
      author: "KP",
    },
    {
      id: 2,
      title: "Another right-side update card example title.",
      date: "20 Nov 2024",
      location: "Delhi | IND",
      author: "AD",
    },
    {
      id: 3,
      title: "Another right-side update card example title.",
      date: "20 Nov 2024",
      location: "Delhi | IND",
      author: "AD",
    },
    {
      id: 4,
      title: "Another right-side update card example title.",
      date: "20 Nov 2024",
      location: "Delhi | IND",
      author: "AD",
    },
  ];
  const settings = {
    dots: false,
    arrows:false,
    infinite: true, 
    autoplay:true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className='home-updates-sec position-relative overflow-hidden'>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3" data-aos="fade-down" data-aos-offset="10">
            <h4>Latest Updates</h4>
          </div>
          <div className="col-md-8 mb-3" data-aos="fade-up" data-aos-offset="10">
            <Slider {...settings}>
             {updates.map((update) => (
              <div key={update.id} className="">
                <div className="update-card">
                  <div className="img-card position-relative overflow-hidden mb-3">
                  <img className='update-img' src={update.image} alt={update.title} />
                  </div>
                  <div className="cont px-3 py-2">
                    <h5 className='mb-3 fs-16'>{update.title}</h5>
                    <p className='fs-14'>{update.description}</p>
                    <div className="d-flex justify-content-between mb-2">
                      <div className='fs-13'>{update.date}</div>
                      <div className='fs-13'>{update.location}</div>
                      <div className='fs-13'>{update.author}</div>
                    </div>
                  </div>
                </div>
              </div>
             ))}
            </Slider>  
          </div>
          <div className="col-md-4 mb-3" data-aos="fade-up" data-aos-offset="10">
            <div className="update-right pt-3 ps-md-5">
              {rightCards.map((card) => (
                <div key={card.id} className="card-1 border-bottom-gray mb-3">
                  <h5>{card.title}</h5>
                  <div className="d-flex justify-content-between mb-3">
                    <div className='fs-13'>{card.date}</div>
                    <div className='fs-13'>{card.location}</div>
                    <div className='fs-13'>{card.author}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeUpdates;
