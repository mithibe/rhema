import React, { useState } from 'react';
import './VisionaryMenHeader.css';
import Logo from '../../assets/images/visionarymen_rounded.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const VisionaryMenHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="visionary-men-header">
      <div className="logo-container">
        <img src={Logo} alt="Visionary Men Logo" />
        <p className="visionary-text">Sight for insight</p>
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

export default VisionaryMenHeader;
