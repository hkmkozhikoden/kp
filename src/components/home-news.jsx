import React from 'react';
import News1 from "../assets/images/banner/1.jpg";
import '../assets/style/css/home-news.css';
function HomeNews() {
  const newsData = [
    {
      id: 1,
      image: News1,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque inventore laborum error dolor dolore accusamus qui explicabo, nam cum saepe.',
      url:"#",
    },
    {
      id: 2,
      image: News1,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque inventore laborum error dolor dolore accusamus qui explicabo, nam cum saepe.',
       url:"#",
    },
    {
      id: 3,
      image: News1,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque inventore laborum error dolor dolore accusamus qui explicabo, nam cum saepe.',
       url:"#",
    },
  ];

  return (
    <section className='home-news-sec'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-3"  data-aos="fade-up" data-aos-offset="10">
            <h4 className='mb-2'>Latest updates & <span className='text-uppercase'>Insights</span></h4>
            <p className='fs-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repudiandae!</p>
          </div>
        </div>
        <div className="row">
          {newsData.map((newsItem) => (
            <div className="col-md-4 mb-3" key={newsItem.id} >
              <div className="news-card"  data-aos="fade-up" data-aos-offset="10">
                <div className='img-card mb-3'>
                  <img className='news-img img-fluid' src={newsItem.image} alt={`News ${newsItem.id}`} />
                </div>
                <div className='cont'>
                  <p>{newsItem.description}</p>
                  <a href={newsItem.url} className='btn btn-more'>Learn more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeNews;
