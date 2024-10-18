import React, { useState } from 'react';
import './PropheticTeachingsPremium.css';
import VideoCard from './VideoCard';
import VideoPlayer from './VideoPlayer';

const PropheticTeachingsPremium = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      title: 'Prophetic Teaching 1',
      thumbnail: '../assets/vedio/holy-bible-with-rays-light-coming-out-ai-generative.jpg',
      description: 'Description for Teaching 1',
      videoUrl: '../assets/vedio/12214421_3840_2160_30fps.mp4',
    },
    {
      title: 'Prophetic Teaching 2',
      thumbnail: '../assets/vedio/holy-bible-with-rays-light-coming-out-ai-generative.jpg',
      description: 'Description for Teaching 2',
      videoUrl: '../assets/vedio/12214421_3840_2160_30fps.mp4',
    },
   
  ];
  

  const handleCardClick = (video) => {
    setSelectedVideo(video);
  };

  const handleClosePlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="prophetic-teachings">
      <h1>Prophetic Teachings</h1>
      <div className="video-list">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            thumbnail={video.thumbnail}
            description={video.description}
            onClick={() => handleCardClick(video)}
          />
        ))}
      </div>

      {selectedVideo && (
        <>
          <div className="modal-backdrop" onClick={handleClosePlayer}></div>
          <div className="video-player-modal">
            <VideoPlayer videoUrl={selectedVideo.videoUrl} />
            <button className="close-button" onClick={handleClosePlayer}>
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PropheticTeachingsPremium;
