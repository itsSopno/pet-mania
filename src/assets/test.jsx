import React, { useContext, useRef, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { AuthContext } from "../../../AuthContext";
import "./service.css";
import gsap from "gsap";

const ServiceDetail = () => {
  const title = useRef(null);
  const info = useRef(null);
  const button = useRef(null);
  const image = useRef(null);

  const { id } = useParams();
  const { services } = useContext(AuthContext);
  const navigation = useNavigate();

  const service = services.find((s) => String(s.serviceId) === String(id));
  if (!service) return <p>Service not found!</p>;

   const handelClick = () => {
    navigation(`/home/service/${service.serviceId}/Book`);
  };


  useEffect(() => {
   
    const timeout = setTimeout(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: "power2.out" },
      });

      gsap.set([title.current, info.current, button.current, image.current], {
        opacity: 0,
        y: 20,
      });

      // smooth entry animation
      tl.to(title.current, { opacity: 1, y: 0 })
        .to(image.current, { opacity: 1, y: 0, scale: 1.02 }, "-=0.4")
        .to(info.current, { opacity: 1, y: 0 }, "-=0.3")
        .to(button.current, { opacity: 1, y: 0, scale: 1 }, "-=0.2");
    }, 50);
    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <section className="main-head w-full min-h-screen">
      <div className="detail-page">
        <div className="header">
          <Link to="/home" className="back-link">
            ⬅ Back
          </Link>
          <h1 ref={title} className="service-title">
            {service.serviceName}
          </h1>
        </div>

        <div className="main-point">
          <div className="image-section">
            <img
              ref={image}
              src={service.image}
              alt={service.serviceName}
              className="service-image"
            />
          </div>

          <div ref={info} className="info-section">
            <p className="provider">Provider: {service.providerName}</p>
            <p className="email">Email: {service.providerEmail}</p>
            <p className="price">Price: ${service.price}</p>
            <p className="rating">Rating: {service.rating}</p>
            <p className="slots">Slots Available: {service.slotsAvailable}</p>
            <p className="description">Description: {service.description}</p>
            <p className="category">Category: {service.category}</p>
          </div>
        </div>

        <div className="cta">
          <button ref={button} onClick={handelClick} className="learn-more-btn">
            Book Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;