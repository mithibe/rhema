// App.js
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import Header from './components/Header';
import Main from './components/Main';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import TestimoniesSection from './components/TestimoniesSection';
import Donations from './components/DonationsSection';
import Teachings from './components/PropheticTeachings';
import './App.css';

// Lazy load components for code splitting
const VisionaryMen2 = lazy(() => import('./components/suitablehelpers/VisionaryMen2'));
const VisionaryMen = lazy(() => import('./components/visionaryMen/VisionaryMen'));
const VideoPlayer = lazy(() => import('./components/VideoPlayer.js'));

// Create an authentication context
export const AuthContext = React.createContext();

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = React.useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      <Router>
        <div className="App">
          <Routes>
            {/* Main page route */}
            <Route exact path="/" element={
              <>
                <Header />
                <Main />
                <VideoSection />
                <TestimoniesSection />
                <Donations />
                <Teachings />
                <Footer />
              </>
            } />

            {/* Suitable Helpers Route (Lazy Loaded) */}
            <Route path="/suitable-helpers" element={
              <Suspense fallback={<div>Loading...</div>}>
                <VisionaryMen2 />
              </Suspense>
            } />

            {/* Visionary men route */}
            <Route path="/visionary-men" element={
              <Suspense fallback={<div>Loading...</div>}>
                <VisionaryMen />
              </Suspense>
            } />

            {/* Video Player Route (Protected) */}
            <Route path="/video-player" element={
              <ProtectedRoute>
                <Suspense fallback={<div>Loading...</div>}>
                  <VideoPlayer />
                </Suspense>
              </ProtectedRoute>
            } />

            {/* 404 Route */}
            <Route path="*" element={<div>404 Page Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;