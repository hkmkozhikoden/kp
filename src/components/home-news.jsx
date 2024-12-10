import React from 'react';
import Slider from 'react-slick'; 
import News1 from "../assets/images/banner/1.jpg";
import News2 from "../assets/images/banner/2.jpg";
import News4 from "../assets/images/banner/5.jpg";
import News3 from "../assets/images/banner/4.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../assets/style/css/home-news.css';

function HomeNews() {
  const newsData = [
    {
      id: 1,
      image: News1,
      description: 'The evolution of smart home technology is enhancing the way we live by offering integrated solutions for security, energy management, and convenience. As these technologies continue to advance, they promise to make our homes more efficient, secure, and comfortable.',
      url: "#",
    },
    {
      id: 2,
      image: News3,
      description: 'AI is more than just a buzzword—it is a powerful tool that can transform every aspect of your business. By embracing AI, businesses can automate tasks, enhance customer experiences, make data-driven decisions, improve operational efficiency, and drive innovation.',
      url: "#",
    },
    {
      id: 3,
      image: News4,
      description: 'Staying ahead in web development requires adherence to best practices, including responsive design, accessibility, and optimized performance. This blog covers the top practices developers should follow to ensure their websites are user-friendly, fast, and secure in 2024.',
      url: "#",
    },
    {
      id: 4,
      image: News2,
      description: 'Staying ahead in web development requires adherence to best practices, including responsive design, accessibility, and optimized performance. This blog covers the top practices developers should follow to ensure their websites are user-friendly, fast, and secure in 2024.',
      url: "#",
    },
  ];
  const settings = {
    dots: false,
    arrows:false,
    infinite: true, 
    autoplay:true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className='home-news-sec'>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3" data-aos="fade-up" data-aos-offset="10">
            <h4 className='mb-2'>Latest updates & <span className='text-uppercase'>Insights</span></h4>
            <p className='fs-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repudiandae!</p>
          </div>
        </div>
        <Slider {...settings}>
          {newsData.map((newsItem) => (
            <div key={newsItem.id}>
              <div className="news-card" data-aos="fade-up" data-aos-offset="10">
                <div className='img-card mb-3'>
                  <img className='news-img img-fluid' src={newsItem.image} alt={`News ${newsItem.id}`} />
                </div>
                <div className='cont'>
                  <p className='truncate-3 poppins-light'>{newsItem.description}</p>
                  <a href={newsItem.url} className='btn btn-more'>Learn more</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default HomeNews;
