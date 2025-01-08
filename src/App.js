import React, { Suspense, lazy, useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import VideoSection from './components/VideoSection';
import TestimoniesSection from './components/TestimoniesSection';
import './App.css';

// Lazy load components for better performance
const Donations = lazy(() => import('./components/DonationsSection'));
const Teachings = lazy(() => import('./components/PropheticTeachings'));
const MentorsSection = lazy(() => import('./components/MeetOurMentors'));
const VisionaryMen2 = lazy(() => import('./components/suitablehelpers/VisionaryMen2'));
const VisionaryMen = lazy(() => import('./components/visionaryMen/VisionaryMen'));
const VideoPlayer = lazy(() => import('./components/VideoPlayer'));

// Create an authentication context
export const AuthContext = React.createContext();

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// AppContent component to handle location-based rendering
const AppContent = () => {
  const location = useLocation();
  const showHeader = location.pathname === '/';

  return (
    <div className="App">
      {showHeader && <Header />}
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Routes>
          {/* Main page route */}
          <Route
            exact
            path="/"
            element={
              <>
                <Main />
                <VideoSection />
                <TestimoniesSection />
              </>
            }
          />

          {/* About Us Route */}
          <Route path="/about-us" element={<MentorsSection />} />

          {/* Prophetic Teachings Route */}
          <Route path="/prophetic-teachings" element={<Teachings />} />

          {/* Donations Route */}
          <Route path="/donations" element={<Donations />} />

          {/* Suitable Helpers Route */}
          <Route path="/suitable-helpers" element={<VisionaryMen2 />} />

          {/* Visionary Men Route */}
          <Route path="/visionary-men" element={<VisionaryMen />} />

          {/* Video Player Route (Protected) */}
          <Route
            path="/video-player"
            element={
              <ProtectedRoute>
                <VideoPlayer />
              </ProtectedRoute>
            }
          />

          {/* 404 Route */}
          <Route
            path="*"
            element={
              <div className="not-found">
                <h2>404 - Page Not Found</h2>
                <p>
                  The page you're looking for doesn't exist. <a href="/">Go back to Home</a>
                </p>
              </div>
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      <Router>
        <AppContent />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
