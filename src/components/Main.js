// src/components/Main.js
import React from 'react';
import './Main.css';
import NairobiImage from '../assets/images/aerial-view-of-nairobi-cbd-buildings-looking-west-kenya-EHA190.jpg';
import InfoSection from './InfoSection';

const Main = () => {
  return (
    <div>
      <main className="main">
        <div className="content-container">
          <div className="intro-text">
            <h1>WELCOME TO RHEMA SANCTUARY</h1>
            <p>
              Rhema Sanctuary, located in Nairobi, is a dynamic church dedicated to spiritual growth. Mandated to "Relieve and Release Every Nation," it transforms lives through worship, inspiring sermons, and community outreach. The church fosters a welcoming environment, emphasizing faith, hope, and love. Under passionate leadership, Rhema Sanctuary nurtures the spiritual well-being of individuals and families, guiding them toward a deeper relationship with God. The church actively addresses social issues, promotes unity, and empowers members to impact their communities and nations globally.
            </p>
            <button>about us</button>
          </div>
          <div className="intro-image">
            <img src={NairobiImage} alt="Nairobi" />
          </div>
        </div>
      </main>
      <InfoSection />
    </div>
  );
};

export default Main;
