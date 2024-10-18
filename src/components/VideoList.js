
// src/components/VideoList.js
import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import './VideoList.css';

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('http://localhost:6000/api/videos');
      const data = await response.json();
      setVideos(data.videos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <div className="video-gallery">
      <div className="video-list">
        {videos.map(video => (
          <div 
            key={video.id} 
            className="video-item"
            onClick={() => setSelectedVideo(video.id)}
          >
            <img src={video.poster} alt={video.title} />
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
      {selectedVideo && (
        <div className="video-player">
          <VideoPlayer videoId={selectedVideo} />
        </div>
      )}
    </div>
  );
};

export default VideoList;