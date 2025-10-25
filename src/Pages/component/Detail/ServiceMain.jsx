import React, { useContext } from 'react';
import { useParams, Link } from 'react-router';
import { AuthContext } from '../../../AuthContext';
import './service.css'
const ServiceMain = () => {
  const { id } = useParams();
  const { services } = useContext(AuthContext);

  const service = services.find((s) => s.serviceId === parseInt(id));

  if (!service) return <p>Service not found!</p>;

  return (
    <section className='main-head w-full h-screen'>
    <div className='detail-page'>
      <div className='header'>
        <Link to="About" className='back-link'>⬅ Back</Link>
        <h1 className='service-title'>{service.serviceName}</h1>
      </div>
<div className='main-point'>
      <div className='image-section'>
        <img src={service.image} alt={service.serviceName} className='service-image' />
      </div>
       <div className='info-section'>
        <p className='provider'>Provider: {service.providerName}</p>
        <p className='email'>Email: {service.providerEmail}</p>
        <p className='price'>Price: ${service.price}</p>
        <p className='rating'>Rating: {service.rating}</p>
        <p className='slots'>Slots Available: {service.slotsAvailable}</p>
        <p className='description'>Description: {service.description}</p>
        <p className='category'>Category: {service.category}</p>
      </div>
      </div>
 <div className='cta'>
        <button className='learn-more-btn'>Book Service</button>
      </div>
    </div>
    </section>
  );
};

export default ServiceMain;
