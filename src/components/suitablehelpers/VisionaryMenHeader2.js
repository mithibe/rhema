import React, { useState } from 'react';
import './VisionaryMenHeader2.css';
import Logo from '../../assets/images/sutableHelpers.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const VisionaryMenHeader2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="visionary-men-header">
      <div className="logo-container">
        <img src={Logo} alt="Visionary Men Logo" />
        <p className="visionary-text">healing the woman to heal</p>
      </div>
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#about">About Us</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact Us</a>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default VisionaryMenHeader2;
