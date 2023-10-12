import React from 'react';
import '../assets/css/services.css';
import biking from '../assets/images/biking.jpeg';
import bungee from '../assets/images/bungee.jpeg';
import ServiceNavbar from '../components/servicenavbar';
import kayaking from '../assets/images/kayaking.jpeg';
import rafting from '../assets/images/rafting.jpeg';
import skidiving from '../assets/images/skidiving.jpeg';
import Hiking1 from '../assets/images/Hiking1.jpeg';
import home5 from '../assets/images/home5.jpg';
import front1 from '../assets/images/front1.jpeg';

const servicesData = [
  {
    image: biking,
    text: 'mountain biking',
  },
  {
    image: bungee,
    text: 'bungee jumping',
  },
  {
    image: kayaking,
    text: 'kayaking',
  },
  {
    image: rafting,
    text: 'rafting',
  },
  {
    image: skidiving,
    text: 'skidiving',
  },
  {
    image: Hiking1,
    text: 'hiking',
  },
  {
    image: front1,
    text: 'sea diving',
  },
  {
    image: home5,
    text: 'Iceland travel',
  },
];

const Service = () => {
  return (
    <>
      <ServiceNavbar />
      <h3>OUR ADVENTURES !</h3>
      <div className="service-container">
        {servicesData.map((service, index) => (
          <div className="service-item" key={index}>
            <img
              src={service.image}
              alt={`Image ${index + 1}`}
              className="service-img" // Add a class for specific styling
            />
            <div className="service-content">
              <div className="service-text">{service.text}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
