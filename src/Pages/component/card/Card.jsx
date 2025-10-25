import React from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import './Card.css';

const CardSlider = ({ services }) => {
  return (
    <section className="meet-experts w-full h-screen ">
      <h2 className="section-title">OUR POPULAR SERVICES</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {services.map((service) => (
          <SwiperSlide key={service.serviceId}>
            <Link to={`service/${service.serviceId}`}>
              <div className="expert-card">
                <img
                  src={service.image || 'https://via.placeholder.com/150'}
                  alt={service.serviceName}
                  className="expert-image"
                />
                <h3 className="expert-name">{service.serviceName}</h3>
                <p className="expert-title">{service.providerName}</p>
                <p className="expert-description">{service.description}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CardSlider;

