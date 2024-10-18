import React, { useRef } from 'react';
import EventCard from './EventCard2';
import './Events2.css';

// Importing images directly
import ConferenceImage from '../../assets/images/suitableHelpers/7.jpg';
import RetreatImage from '../../assets/images/suitableHelpers/1.jpg';

const Events2 = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({
            left: -300, // Adjust scroll amount as necessary
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({
            left: 300, // Adjust scroll amount as necessary
            behavior: 'smooth',
        });
    };

    const eventList = [
        {
            id: 1,
            title: "Suitable Helpers conference",
            location: "Rhema Church, Nairobi",
            date: "September 20, 2024",
            time: "10:00 AM - 4:00 PM",
            description: "A conference to empower women through spiritual teachings and community support.",
            image: ConferenceImage
        },
        {
            id: 2,
            title: "Suitable Helpers Retreat",
            location: "Lake Naivasha Resort",
            date: "October 15, 2024",
            time: "8:00 AM - 5:00 PM",
            description: "A retreat focused on relaxation, reflection, and spiritual growth.",
            image: RetreatImage
        },
        {
            id: 1,
            title: "Suitable Helpers conference",
            location: "Rhema Church, Nairobi",
            date: "September 20, 2024",
            time: "10:00 AM - 4:00 PM",
            description: "A conference to empower women through spiritual teachings and community support.",
            image: ConferenceImage
        },
        {
            id: 1,
            title: "Suitable Helpers conference",
            location: "Rhema Church, Nairobi",
            date: "September 20, 2024",
            time: "10:00 AM - 4:00 PM",
            description: "A conference to empower women through spiritual teachings and community support.",
            image: ConferenceImage
        },
        {
            id: 1,
            title: "Suitable Helpers conference",
            location: "Rhema Church, Nairobi",
            date: "September 20, 2024",
            time: "10:00 AM - 4:00 PM",
            description: "A conference to empower women through spiritual teachings and community support.",
            image: ConferenceImage
        },
        {
            id: 1,
            title: "Suitable Helpers conference",
            location: "Rhema Church, Nairobi",
            date: "September 20, 2024",
            time: "10:00 AM - 4:00 PM",
            description: "A conference to empower women through spiritual teachings and community support.",
            image: ConferenceImage
        },
        {
            id: 1,
            title: "Suitable Helpers conference",
            location: "Rhema Church, Nairobi",
            date: "September 20, 2024",
            time: "10:00 AM - 4:00 PM",
            description: "A conference to empower women through spiritual teachings and community support.",
            image: ConferenceImage
        },
        // Add more events here...
    ];

    return (
        <div className="events-section">
            <h2>Upcoming Events</h2>
            <div className="arrow left-arrow" onClick={scrollLeft}>&lt;</div>
            <div className="events-list" ref={scrollContainerRef}>
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
            <div className="arrow right-arrow" onClick={scrollRight}>&gt;</div>
        </div>
    );
};

export default Events2;
