 import React, { useContext } from 'react';
import { useParams, Link } from 'react-router';

import './main.css'
import { AuthContext } from '../../AuthContext';
const Main = () => {
  const { id } = useParams();
  const { main } = useContext(AuthContext);

  const mains = main.find((s) => s.serviceId === parseInt(id));

  if (!mains) return <p>Service not found!</p>;

  return (
    <section className='main-head w-full h-screen'>
    <div className='detail-page'>
      <div className='header'>
        <Link to="/home" className='back-link'>⬅ Back</Link>
        <h1 className='service-title'>{mains.serviceName}</h1>
      </div>
<div className='main-point'>
      <div className='image-section'>
        <img src={mains.image} alt={mains.serviceName} className='service-image' />
      </div>
       <div className='info-section'>
        <p className='provider'>Provider: {mains.providerName}</p>
        <p className='email'>Email: {mains.providerEmail}</p>
        <p className='price'>Price: ${mains.price}</p>
        <p className='rating'>Rating: {mains.rating}</p>
        <p className='slots'>Slots Available: {mains.slotsAvailable}</p>
        <p className='description'>Description: {mains.description}</p>
        <p className='category'>Category: {mains.category}</p>
      </div>
      </div>
 <div className='cta'>
        <button className='learn-more-btn'>Book Service</button>
      </div>
    </div>
    </section>

    );
};

export default Main;