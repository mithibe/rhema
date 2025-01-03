import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Play } from 'lucide-react';
import PropheticHeader from './PropheticHeader';
import PromotionalBanner from './Promotionalbanner';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const [videosData, setVideosData] = useState([]);
  const [error, setError] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [playingVideos, setPlayingVideos] = useState({});

  useEffect(() => {
    fetchVideoData();
  }, []);

  const fetchVideoData = async () => {
    try {
      const urls = ['http://localhost:5000/api/video1', 'http://localhost:5000/api/video2'];
      const responses = await Promise.all(urls.map((url) => fetch(url)));
      const data = await Promise.all(
        responses.map((res) => {
          if (!res.ok) throw new Error('Failed to fetch video data');
          return res.json();
        })
      );
      setVideosData(data.flat()); // Ensure combined arrays if multiple APIs return arrays
    } catch (err) {
      console.error('Error fetching video data:', err);
      setError('Failed to load videos. Please try again later.');
    }
  };

  const toggleDescription = (videoId) => {
    setExpandedDescriptions((prev) => ({ ...prev, [videoId]: !prev[videoId] }));
  };

  const togglePlay = (videoId) => {
    setPlayingVideos((prev) => ({ ...prev, [videoId]: !prev[videoId] }));
  };

  if (error) return <div className="error-message">{error}</div>;
  if (videosData.length === 0) return <div className="loading-message">Loading videos...</div>;

  const renderVideoDescription = (video) => (
    <div className="video-description">
      <p className={`description-text ${expandedDescriptions[video.id] ? 'expanded' : ''}`}>
        Embark on a transformative journey of spiritual and prophetic growth with Prophet John Saidimu.
        In this comprehensive series of video modules, Prophet Saidimu guides you through the foundational
        principles of prophetic ministry, helping you develop your spiritual gifts and deepen your connection with the divine.
        {expandedDescriptions[video.id] && (
          <>
            <br /><br />
            Each module is carefully designed to build upon the previous, covering topics such as:
            <ul className="description-list">
              <li>Understanding the prophetic calling</li>
              <li>Developing spiritual sensitivity</li>
              <li>Interpreting prophetic visions and dreams</li>
              <li>Cultivating a lifestyle of prayer and fasting</li>
              <li>Applying prophetic insights in daily life</li>
            </ul>
            <br />
            Prophet Saidimu's teachings combine biblical wisdom with practical exercises, allowing you to grow
            at your own pace while being part of a supportive community of like-minded individuals.
          </>
        )}
      </p>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          toggleDescription(video.id);
        }}
        className="read-more-link"
      >
        {expandedDescriptions[video.id] ? (
          <>
            Show less <ChevronUp className="chevron-icon" />
          </>
        ) : (
          <>
            Read more <ChevronDown className="chevron-icon" />
          </>
        )}
      </a>
    </div>
  );

  const renderVideo = (video, index) => (
    <div key={video.id || index} className="video-card">
      <div className="video-player">
        <iframe
          src={`https://player.vdocipher.com/v2/?otp=${video.otp}&playbackInfo=${video.playbackInfo}$
            {playingVideos[video.id] ? '&autoplay=1' : ''}`}
          style={{ border: 0, width: '100%', height: '100%' }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={`Prophetic teachings ${index + 1}`}
        ></iframe>
        {!playingVideos[video.id] && (
          <div
            className="video-overlay"
            onClick={() => togglePlay(video.id)}
            style={{ cursor: 'pointer' }}
          >
            <Play className="play-icon" size={48} color="white" />
          </div>
        )}
      </div>
      <div className="video-info">
        <h2 className="video-title">Prophetic Teachings with Prophet John Saidimu - Part {index + 1}</h2>
      </div>
      {renderVideoDescription(video)}
    </div>
  );

  return (
    <div className="video-page">
      <PropheticHeader />
      <PromotionalBanner />
      <div className="video-grid">
        {videosData.map((video, index) => renderVideo(video, index))}
      </div>
    </div>
  );
};

export default VideoPlayer;
