// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Location</h3>
        <p>Moi avenue</p>
        <p>Ghale House, Opp Jeevanjee Gardens</p>
        <p>KENYA</p>
      </div>
      <div className="footer-section">
        <h3>Service Times</h3>
        <p><strong>In-Person Service Times:</strong> 9:00 AM + 11 AM (EAT)</p>
        <p><strong>Online:</strong> 9:00 AM (EAT)</p>
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <p>rhemaprayers1@gmail.com</p>
        <p>+2540123456789</p>
      </div>
      <div className="footer-icons">
        <FaInstagram />
        <FaFacebook />
        <FaXTwitter />
        <FaYoutube />
      </div>
    </footer>
  );
};

export default Footer;
