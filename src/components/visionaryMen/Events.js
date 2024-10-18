import React from 'react';
import EventCard from './EventCard';
import './Events.css';

// Importing images directly
import ConferenceImage from '../../assets/images/visionary/9.jpg';
import RetreatImage from '../../assets/images/visionary/1.jpg';

const Events = () => {
    const eventList = [
        {
            id: 1,
            title: "Visionary Men's Conference",
            location: "Rhema Church, Nairobi",
            date: "September 20, 2024",
            time: "10:00 AM - 4:00 PM",
            description: "A conference to empower men through spiritual teachings and community support.",
            image: ConferenceImage
        },
        {
            id: 2,
            title: "Men's Retreat",
            location: "Lake Naivasha Resort",
            date: "October 15, 2024",
            time: "8:00 AM - 5:00 PM",
            description: "A retreat focused on relaxation, reflection, and spiritual growth.",
            image: RetreatImage
        },
        {
            id: 3,
            title: "upcoming",
            location: "to be announced",
            date: "October 15, 2024",
            time: "8:00 AM - 5:00 PM",
            description: "A retreat focused on relaxation, reflection, and spiritual growth.",
            image: RetreatImage
        },
        {
            id: 4,
            title: "Men's Retreat",
            location: "Lake Naivasha Resort",
            date: "October 15, 2024",
            time: "8:00 AM - 5:00 PM",
            description: "A retreat focused on relaxation, reflection, and spiritual growth.",
            image: RetreatImage
        },
        {
            id: 5,
            title: "Men's Retreat",
            location: "Lake Naivasha Resort",
            date: "October 15, 2024",
            time: "8:00 AM - 5:00 PM",
            description: "A retreat focused on relaxation, reflection, and spiritual growth.",
            image: RetreatImage
        },
        {
            id: 6,
            title: "Men's Retreat",
            location: "Lake Naivasha Resort",
            date: "October 15, 2024",
            time: "8:00 AM - 5:00 PM",
            description: "A retreat focused on relaxation, reflection, and spiritual growth.",
            image: RetreatImage
        },
        // Add more events as needed
    ];

    return (
        <div className="events-section">
            <h2>Upcoming Events</h2>
            <div className="events-list">
                {eventList.map(event => (
                    <div key={event.id} className="event-card-container">
                        <EventCard 
                            title={event.title}
                            location={event.location}
                            date={event.date}
                            time={event.time}
                            description={event.description}
                            image={event.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
