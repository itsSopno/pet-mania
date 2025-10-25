import React, { useContext } from 'react';
import './about.css'
import { AuthContext } from '../../../AuthContext';
import { Link} from 'react-router';
import LenisScroll from '../../LenisScroll';
const About = () => {
 const { services = [] } = useContext(AuthContext);


return (
  <>
  <LenisScroll />
  <section className="meet-experts w-full h-screen bg-[#27187E]">
    <h2 className="section-title">OUR POPULAR SERVICES</h2>
    <div className="expert-cards">
      {services.length > 0 ? (
        services.map((service) => (
          <Link to={`main/${service.serviceId}`} key={service.serviceId}>
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
        ))
      ) : (
        <p>Loading services...</p>
      )}
    </div>
  </section>
  </>
);
};

export default About;