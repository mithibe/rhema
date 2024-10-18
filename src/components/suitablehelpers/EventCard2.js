import React from 'react';
import './EventCard2.css';

const EventCard2 = ({ title, location, date, time, description, image }) => {
    return (
        <div className="event-card">
            <div className="event-image">
                <img src={image} alt={title} />
            </div>
            <div className="event-details">
                <h3>{title}</h3>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Time:</strong> {time}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default EventCard2;
