import React from 'react';
import './DonationsSection.css';

const DonationsSection = () => {
  return (
    <div className="donations-section">
      <h2>Support Our Projects</h2>
      <p>
        Your generous donations and tithes help us continue our work and support our community.
        We are committed to making a positive impact, and with your support, we can achieve even more.
      </p>
      <button className="donate-button">
        Donate Now
      </button>
    </div>
  );
};

export default DonationsSection;
