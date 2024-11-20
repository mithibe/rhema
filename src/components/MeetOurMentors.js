import React from 'react';
import './MentorsSection.css';
import ProphetImage from '../assets/images/WhatsApp_Image_2024-07-04_at_10.25.14_2a5d1000-removebg-preview copy.png';
import ApostleImage from '../assets/images/apostle.png';

const MentorsSection = () => {
  return (
    <section className="mentors-section">
      <h2>Meet Our Spiritual Mentors</h2>
      <div className="mentor-card">
        <div className="mentor-image">
          <img src={ProphetImage} alt="Prophet John Saidimu" />
        </div>
        <div className="mentor-text">
          <h3>Prophet John Saidimu</h3>
          <p>
            Prophet John is committed to seeing the message of grace preached nationally and globally. He is passionate about helping people understand their true identity in Christ.
          </p>
          <button>Get to Know Him</button>
        </div>
      </div>
      <div className="mentor-card">
        <div className="mentor-image">
          <img src={ApostleImage} alt="Apostle Catherine Wangari" />
        </div>
        <div className="mentor-text">
          <h3>Apostle Catherine Wangari</h3>
          <p>
            Apostle Catherine is dedicated to guiding people toward a deeper understanding of their faith and spiritual growth. Her teachings have transformed many lives.
          </p>
          <button>Get to Know Her</button>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
