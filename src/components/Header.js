// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';
import Logo from '../assets/images/round_logo_full_elements.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDrawer = () => {
    if (drawerOpen) {
      setDropdownOpen(false); 
    }
    setDrawerOpen(!drawerOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = () => {
    setDrawerOpen(false); // Closes the drawer when a link is clicked
    setDropdownOpen(false); // Also close the dropdown if it's open
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <p className="mandate-text2"><em>Mandated to relieve and release</em></p>
      </div>
      <nav className={`nav ${drawerOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#about" onClick={handleLinkClick}>About Us</a></li>
          <li className="dropdown">
            <a href="#ministries" onClick={toggleDropdown}>Ministries</a>
            <ul className={`dropdown-content ${dropdownOpen ? 'show' : 'hide'}`}>
              <li><Link to="/visionary-men">Visionary Men</Link></li>
              <li><Link to="/suitable-helpers">Suitable Helpers</Link></li> {/* navigation to suitable helpers*/}
            </ul>
          </li>
          <li><a href="#Prophetic-teachings" onClick={handleLinkClick}>Prophetic Teachings</a></li>
          <li><a href="#events" onClick={handleLinkClick}>Events</a></li>
          <li><a href="#donations" onClick={handleLinkClick}>Donations</a></li>
          <li><a href="#contacts" onClick={handleLinkClick}>Contacts</a></li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={toggleDrawer}>
        {drawerOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
