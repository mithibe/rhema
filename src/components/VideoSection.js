// src/components/VideoSection.js
import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9nxoao3PQKI?si=cpZjTfE3aloqbtZV"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-text">
        <h2>Watch The Sunday Sermon</h2>
        <p>
        Do you want to visit our online service this Sunday in Rhema Sanctuary, Nairobi, that could be the climax of your life? Our first service kicks off at 9 AM, which will be followed by the second service at 12 PM. If you are feeling defeated by the many difficulties that life throws at you, join us for one hour of prayer at our sanctuary: peace and spiritual healing from the creator of the universe. We are sitting right across the street from Jeevanjee Gardens. Let's come together, let's worship, and let's rise above together!

        </p>
        <div className="button-container">
          <button>
            <a href="https://www.youtube.com/@rhemaprayersrhemasanctuary9482" target="_blank" rel="noopener noreferrer">Visit Our YouTube Channel</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
