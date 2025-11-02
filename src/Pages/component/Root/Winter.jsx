import React, { useRef, useEffect } from 'react';
import './winter care/winter.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Winter = () => {
  const main = useRef(null);
  const mainp = useRef(null);
  const ptwo = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          start: "top 85%", 
          end: "bottom 30%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

    
      tl.from(mainp.current, {
        x: 150,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });

  
      tl.from(ptwo.current, {
        x: -150,
        opacity: 0,
        duration: 1.5,
        delay: 0.3, 
        ease: "power2.out",
      }, "-=1");
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className='winter-safety'>
        <h1 className='k text-9xl winter-h1'>
          Winter <br /> Pet Care Tips
        </h1>
      </div>

      <div ref={main} className='winter-two gap-9'>
        <div>
          <p ref={mainp} className='winter-p'>
            As winter sets in, it's important to keep your pets warm and safe.
            Provide them with a cozy, dry indoor spot, and consider using
            sweaters or coats for outdoor walks. Protect their paws from salt
            and ice, and ensure they have fresh, unfrozen water available at all
            times. Indoor play and mental stimulation can help keep them active
            during the cold months.
          </p>
        </div>

        <div className='winter-p-two-father'>
          <p ref={ptwo} className='winter-p-two'>
            Winter also brings risks like toxic chemicals (antifreeze), holiday
            treats, and frozen lakes. Keep harmful substances out of reach, and
            always check your car for animals seeking warmth. Don’t forget to
            schedule a vet checkup, especially for older pets, to ensure they
            stay healthy throughout the season.
          </p>
        </div>
      </div>
    </>
  );
};

export default Winter;