import React, { useContext, useRef, useEffect } from 'react';
import './root.css';
import { AuthContext } from '../../../AuthContext';
import MeetOurExperts from '../pages/Expert';
import Winter from './Winter';
import { useLoaderData } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../card/Card';
import LenisScroll from '../../LenisScroll';

gsap.registerPlugin(ScrollTrigger);

const Root = () => {
  const secend = useRef(null);
  const secendp = useRef(null);
  const headp = useRef(null);

  const data = useLoaderData();
  const { petFood, services, loading } = useContext(AuthContext);
 
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: secend.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl.from(secendp.current, {
        x: 600,
        opacity: 0,
        duration: 3,
        delay: 1.5,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);
  console.log("Loaded Data:", data);
console.log(petFood)
  if (loading) return <div>Loading services...</div>;

  return (
    <div>
      <LenisScroll />

      <section className="w-full h-screen main">
        <div className="left">
          <h1 className="pet-h">Your Pet's Health, Our Priority</h1>
        </div>
        <div className="right">
          <div className="cat-description">
            <div className="pet-div">
              <p ref={headp} className="pet-p">
                At PetCare Haven, we believe pets are family. Whether you're a
                new pet owner or a seasoned pro, we are here to help you provide
                the best care possible for your furry companions. From grooming
                tips to health advice and everything in between, we are your
                one-stop destination for all things pet care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={secend} className="w-full h-screen bg-[#F7F7FF]">
        <div className="pet-safety">
          <h1 className="k text-9xl safety-h1">
            Pet<br />Safety Tips
          </h1>
        </div>
        <div className="safety-two">
          <p ref={secendp} className="safety-p">
            Safety is always a top priority. Whether it’s pet-proofing your
            home, traveling with your pet, or handling dangerous situations, we
            share practical safety tips to protect your pet in all areas of
            life. Our expert advice will ensure your pet is safe both inside and
            outside the house, giving you peace of mind while they explore the
            world around them.
          </p>
        </div>
      </section>

      <section>
        <MeetOurExperts />
      </section>

      <section className="w-full h-screen bg-[#F7F7FF]">
        <Winter />
      </section>

      <section className="w-full h-screen bg-[#27187e]">
        <Card services={services} />
        <h1 className="pet-h1">Your Pet's Health, Our Priority</h1>
      </section>
    </div>
  );
};

export default Root;
