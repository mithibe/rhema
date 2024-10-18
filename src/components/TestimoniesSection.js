import React, { useEffect, useRef, useState } from 'react';
import './TestimoniesSection.css';
import TestimonyCard from './TestimonyCard';
import testimage from '../assets/images/test.jpg';

const TestimoniesSection = () => {
  const testimonies = [
    {
      id: 1,
      name: 'Victor Lunani',
      opinion: '"This church has been a blessing to my life. The sermons are always on point."',
      image: testimage,
    },
    {
      id: 2,
      name: 'Victor Lunani',
      opinion: '"The community here is like a second family. I’ve found so much support."',
      image: testimage,
    },
    {
      id: 3,
      name: 'Victor Lunani',
      opinion: '"I love how the church fosters spiritual growth in every aspect."',
      image: testimage,
    },
    {
      id: 4,
      name: 'Victor Lunani',
      opinion: '"A place where faith, hope, and love truly come alive."',
      image: testimage,
    },
    {
      id: 5,
      name: 'Victor Lunani',
      opinion: '"The worship sessions are so uplifting; they fill my heart with joy."',
      image: testimage,
    },
    {
      id: 6,
      name: 'Victor Lunani',
      opinion: '"I’ve grown so much spiritually since joining this community."',
      image: testimage,
    },
  ];

  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;

    const startScrolling = () => {
      setIsPaused(false);
    };

    const stopScrolling = () => {
      setIsPaused(true);
    };

    carousel.addEventListener('mousedown', stopScrolling);
    carousel.addEventListener('touchstart', stopScrolling);

    carousel.addEventListener('mouseup', startScrolling);
    carousel.addEventListener('touchend', startScrolling);

    return () => {
      carousel.removeEventListener('mousedown', stopScrolling);
      carousel.removeEventListener('touchstart', stopScrolling);
      carousel.removeEventListener('mouseup', startScrolling);
      carousel.removeEventListener('touchend', startScrolling);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current && !isPaused) {
        carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="testimonies-section">
      <h2>Testimonies</h2>
      <div className="carousel" ref={carouselRef}>
        {testimonies.map((testimony) => (
          <TestimonyCard key={testimony.id} testimony={testimony} />
        ))}
      </div>
    </div>
  );
};

export default TestimoniesSection;
