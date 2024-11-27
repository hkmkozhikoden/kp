import React from 'react';
import '../assets/style/css/service-card.css';
import Img1 from '../assets/images/banner/2.jpg';
import Img2 from '../assets/images/banner/3.jpg';
import Img3 from '../assets/images/banner/5.jpg';
import Img4 from '../assets/images/banner/home3.jpg';
import Img5 from '../assets/images/banner/blog.jpg';
import Img6 from '../assets/images/banner/home1.jpg';
import Serv1 from '../assets/images/icons/loan.png';
import Serv2 from '../assets/images/icons/gst.png';
import Serv3 from '../assets/images/icons/software.png';

function ServiceCard() {
  const services = [
    {
      id: 1,
      icon: Serv1,
      title: 'GST Registration',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem enim doloremque nam accusamus voluptatum vitae praesentium fugiat aliquam id aut eligendi possimus ipsa minima ab minus a alias reiciendis.',
      image: Img1,
    },
    {
      id: 2,
      icon: Serv2,
      title: 'Loan Services',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem enim doloremque nam accusamus voluptatum vitae praesentium fugiat aliquam id aut eligendi possimus ipsa minima ab minus a alias reiciendis.',
      image: Img2,
    },
    {
      id: 3,
      icon: Serv3,
      title: 'Software Solutions',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem enim doloremque nam accusamus voluptatum vitae praesentium fugiat aliquam id aut eligendi possimus ipsa minima ab minus a alias reiciendis.',
      image: Img3,
    },
    {
        id: 4,
        icon: Serv2,
        title: 'Loan Services',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem enim doloremque nam accusamus voluptatum vitae praesentium fugiat aliquam id aut eligendi possimus ipsa minima ab minus a alias reiciendis.',
        image: Img4,
      },
      {
        id: 5,
        icon: Serv3,
        title: 'Loan Services',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem enim doloremque nam accusamus voluptatum vitae praesentium fugiat aliquam id aut eligendi possimus ipsa minima ab minus a alias reiciendis.',
        image: Img5,
      },
      {
        id: 6,
        icon: Serv1,
        title: 'Loan Services',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem enim doloremque nam accusamus voluptatum vitae praesentium fugiat aliquam id aut eligendi possimus ipsa minima ab minus a alias reiciendis.',
        image: Img6,
      },
  ];

  return (
    <section className='service-card'>
      <div className="container">
        <div className="row">
          {services.map(service => (
            <div key={service.id} className="col-md-4 mb-3"  data-aos="fade-up" data-aos-offset="10">
              <div className="card-sm my-3">
                <div className='sr-card'>
                  <img src={service.icon} alt={`${service.title}-icon`} />
                </div>
                <h5 className='mt-4'>{service.title}</h5>
                <p>{service.description}</p>
                <img className='ser-img' src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCard;
