import React from 'react';
import './ThreeCards.css';

const ThreeCards = () => {
    return (
        <div className="card-container">
            <div className="hero-card left-card">
                <h3>Our Mission</h3>
                <p>The study of religion encompasses a wide variety of academic disciplines, including theology.</p>
                
            </div>
            <div className="hero-card center-card">
                <h3>Our Church</h3>
                <p>The study of religion encompasses a wide variety of academic disciplines, including theology.</p>
                
            </div>
            <div className="hero-card right-card">
                <h3>Our Vision</h3>
                <p>The study of religion encompasses a wide variety of academic disciplines, including theology.</p>
                
            </div>
        </div>
    );
};

export default ThreeCards;
