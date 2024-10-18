import React from 'react';
import './TestimonyCard.css';

const TestimonyCard = ({ testimony }) => {
  return (
    <div className="testimony-card">
      <img src={testimony.image} alt={`${testimony.name}`} className="user-image" />
      <div className="opinion">
        <p>{testimony.opinion}</p>
        <h4>{testimony.name}</h4>
      </div>
    </div>
  );
};

export default TestimonyCard;
