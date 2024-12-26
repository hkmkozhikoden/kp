import React from 'react';
import Slider from 'react-slick'; 
import Serv1 from '../assets/images/services/tax.webp';
import Serv2 from '../assets/images/services/taxs.webp';
import Serv3 from '../assets/images/services/accounts.webp';
import Serv4 from '../assets/images/services/web-development.webp';
import Serv5 from '../assets/images/services/app-develpment.webp';
import Serv6 from '../assets/images/services/seo.webp';
import Serv7 from '../assets/images/services/tax.webp';
import Serv8 from '../assets/images/services/designing.webp';
import Serv9 from '../assets/images/services/insurance.webp';
import Serv10 from '../assets/images/services/complaints.webp';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../assets/style/css/home-news.css';

function HomeNews() {
  const newsData = [
    {
      id: 1,
      image: Serv1,
      title: 'Direct Taxes',
      description: 
      'All areas of taxation : Personal Tax, Corporate Tax. | Suggesting legal structure of business entities. | Transactional advisory – optimal deal structure | Tax Due Diligence.',
      url: "/services",
    },
    {
      id: 2,
      image: Serv2,
      title: 'Indirect Taxes',
      description: 'AI is more than just a buzzword—it is a powerful tool that can transform every aspect of your business. By embracing AI, businesses can automate tasks, enhance customer experiences, make data-driven decisions, improve operational efficiency, and drive innovation.',
      url: "/services",
    },
    {
      id: 3,
      image: Serv3,
      title: 'Accounts & Audit',
      description: 'Staying ahead in web development requires adherence to best practices, including responsive design, accessibility, and optimized performance. This blog covers the top practices developers should follow to ensure their websites are user-friendly, fast, and secure in 2024.',
      url: "/services",
    },
    {
      id: 4,
      image: Serv5,
      title: 'Mobile App Development',
      description: 'An all-inclusive platform for App development.  Excellent quality, high performance, and efficiency are assured for our Android,  iOS, and web applications.',
      url: "/services",
    },
    {
      id: 5,
      image: Serv4,
      title: 'Website Development',
      description: 'Our expert in-house team uses cutting edge technologies to build custom web and mobile applications that are stunning, robust and scalable',
      url: "/services",
    },
    {
      id: 6,
      image: Serv6,
      title: 'SEO',
      description: "Boost your online presence with KP's SEO and digital marketing services. Our targeted SEO strategies drive more traffic to your website and enhance visibility.",
      url: "/services",
    },
    {
      id: 7,
      image: Serv7,
      title: 'Social Media Marketing',
      description: 'Elevate your online presence with strategic social media marketing, fostering engagement and expanding your audience.',
      url: "/services",
    },
    {
      id: 8,
      image: Serv8,
      title: 'Poster & Visiting Card Desin ',
      description: 'Staying ahead in web development requires adherence to best practices, including responsive design, accessibility, and optimized performance. This blog covers the top practices developers should follow to ensure their websites are user-friendly, fast, and secure in 2024.',
      url: "/services",
    },
    {
      id: 9,
      image: Serv9,
      title: 'Employees State Insurance (ESI)',
      description: 'Staying ahead in web development requires adherence to best practices, including responsive design, accessibility, and optimized performance. This blog covers the top practices developers should follow to ensure their websites are user-friendly, fast, and secure in 2024.',
      url: "/services",
    },
    {
      id: 10,
      image: Serv10,
      title: 'Compliances',
      description: 'Staying ahead in web development requires adherence to best practices, including responsive design, accessibility, and optimized performance. This blog covers the top practices developers should follow to ensure their websites are user-friendly, fast, and secure in 2024.',
      url: "/services",
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
            <h4 className='mb-2'><span className='text-uppercase'>Services</span></h4>
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
                <h5 className=''>{newsItem.title}</h5>
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
