import React from 'react';
import './PromotionalBanner.css';

const PromotionalBanner = () => {
  return (
    <div className="promotional-banner">
      <div className="skew-background"></div>
      <div className="banner-content">
        <div className="text-content">
          <h1>Keep growing</h1>
          <p>
            Thank you for your subscription, Congratulations for unlocking a gem.
          </p>
          <p className="author">-Prophet John Saidimu</p>
        </div>
        <div className="image-container">
          <div className="image-wrapper">
            <img src="../assets/images/WhatsApp_Image_2024-07-04_at_10.25.14_2a5d1000-removebg-preview.png" alt="Proph Saidimu" className="profile-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;