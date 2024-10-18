import React from 'react';
import './InfoSection.css';
import ExampleImage from '../assets/images/My project (6).png';

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-image">
        <img src={ExampleImage} alt="Example" />
      </div>
      <div className="info-text">
        <h2>Welcome</h2>
        <h3>Thank you:</h3>
        <p className='info'>Thank you for visiting our website. We are dedicated to providing a welcoming environment for all.</p>
        <h3>Our Motto:</h3>
        <p className='info'>Striving for excellence in all we do.</p>
        <h3>Our Vision:</h3>
        <p className='info'>To inspire and empower our community through faith and service.</p>
        <h3>Our Mission:</h3>
        <p className='info'>Committed to making a positive impact in the lives of our members and the broader community.</p>
      </div>
    </div>
  );
};

export default InfoSection;
