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
          <li><Link to="/about-us" onClick={handleLinkClick}>About Us</Link></li>
          <li className="dropdown">
            <a href="#ministries" onClick={toggleDropdown}>Ministries</a>
            <ul className={`dropdown-content ${dropdownOpen ? 'show' : 'hide'}`}>
              <li><Link to="/visionary-men" onClick={handleLinkClick}>Visionary Men</Link></li>
              <li><Link to="/suitable-helpers" onClick={handleLinkClick}>Suitable Helpers</Link></li>
            </ul>
          </li>
          <li><Link to="/prophetic-teachings" onClick={handleLinkClick}>Prophetic Teachings</Link></li>
          <li><a href="#events" onClick={handleLinkClick}>Events</a></li>
          <li><Link to="/donations" onClick={handleLinkClick}>Donations</Link></li>
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
