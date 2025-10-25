import React from 'react';
import experty from './istockphoto-2171382633-612x612.jpg'
import './Expert.css'
const MeetOurExperts = () => {
  const experts = [
    {
      id: 1,
      name: "Dr. Alice Johnson",
      title: "Veterinarian",
      image: "https://i.postimg.cc/example1.jpg",  
      description: "Dr. Alice specializes in pet dermatology and has over 15 years of experience in the field."
    },
    {
      id: 2,
      name: "Dr. Ben Smith",
      title: "Veterinary Surgeon",
      image: "https://i.postimg.cc/example2.jpg",  
      description: "Dr. Ben is an expert in animal surgeries, focusing on orthopedic procedures."
    },
    {
      id: 3,
      name: "Dr. Emily Clark",
      title: "Pet Behaviorist",
      image: "https://i.postimg.cc/example3.jpg", 
      description: "Dr. Emily specializes in animal behavior and training, helping pets and owners communicate effectively."
    },
    {
      id: 4,
      name: "Dr. Mike Williams",
      title: "Veterinary Nutritionist",
      image: "https://i.postimg.cc/example4.jpg",  
      description: "Dr. Mike is an expert in creating custom nutrition plans for pets with specific dietary needs."
    }
  ];

  return (
    <section className="meet-experts w-full h-screen bg-[#27187E]">
      <h2 className="section-title">Meet Our Expert Vets</h2>
      <div className="expert-cards">
        {experts.map((expert) => (
          <div key={expert.id} className="expert-card">
            <img src={experty} alt={expert.name} className="expert-image" />
            <h3 className="expert-name">{expert.name}</h3>
            <p className="expert-title">{expert.title}</p>
            <p className="expert-description">{expert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurExperts;
