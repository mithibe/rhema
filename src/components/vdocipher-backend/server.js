const express = require('express');
const axios = require('axios');
const cors = require('cors');

// Constants
const PORT = process.env.PORT || 5000;
const VDOCIPHER_API_URL = 'https://dev.vdocipher.com/api/videos';
const VIDEO_IDS = {
  VIDEO1: '7452d1ed4ed2258e49b9a5332185b4d5',
  VIDEO2: 'e8f5fbabe7284b69a1abb6308b902f01'
};
const API_SECRET = 'YZzDH7dn4Gh3JWS6iSX0B9VgOFih5wJ1gtWqEGhkgoCm8u0kIsuY3Nfdl7nqUfxM';

async function getVdoCipherOTP(videoId) {
  try {
    const response = await axios.post(
      `${VDOCIPHER_API_URL}/${videoId}/otp`,
      { ttl: 300 },
      {
        headers: {
          'Authorization': `Apisecret ${API_SECRET}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(`VdoCipher API Response for ${videoId}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching OTP from VdoCipher for ${videoId}:`, error.response ? error.response.data : error.message);
    throw new Error(`Failed to fetch OTP from VdoCipher for ${videoId}`);
  }
}

const app = express();
app.use(cors());
app.use(express.json());

// Separate endpoints for each video
app.get('/api/video1', async (req, res) => {
  try {
    const otpData = await getVdoCipherOTP(VIDEO_IDS.VIDEO1);
    res.json({ 
      id: 'VIDEO1',
      videoId: VIDEO_IDS.VIDEO1,
      otp: otpData.otp,
      playbackInfo: otpData.playbackInfo
    });
  } catch (error) {
    console.error('Error in /api/video1 route:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/video2', async (req, res) => {
  try {
    const otpData = await getVdoCipherOTP(VIDEO_IDS.VIDEO2);
    res.json({ 
      id: 'VIDEO2',
      videoId: VIDEO_IDS.VIDEO2,
      otp: otpData.otp,
      playbackInfo: otpData.playbackInfo
    });
  } catch (error) {
    console.error('Error in /api/video2 route:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Test Video 1 API: http://localhost:${PORT}/api/video1`);
  console.log(`Test Video 2 API: http://localhost:${PORT}/api/video2`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});