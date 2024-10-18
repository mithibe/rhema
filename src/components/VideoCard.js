import React from 'react';
import './VideoCard.css'; // Ensure you have proper styles

const VideoCard = ({ title, thumbnail, description, onClick }) => {
  return (
    <div className="video-card" onClick={onClick} role="button" tabIndex={0} onKeyPress={onClick}>
      <img className="video-thumbnail" src={thumbnail} alt={`${title} Thumbnail`} />
      <div className="video-content">
        <h3 className="video-title">{title}</h3>
        <p className="video-description">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
