// Modal.js
import React, { useState, useContext } from 'react';
import './Modal.css';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import MpesaPaymentsUI from './mpesapaymentui';
import { AuthContext } from '../App';

const Modal = ({ closeModal }) => {
  const [activeTab, setActiveTab] = useState('register');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeScreen, setActiveScreen] = useState('auth');
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = () => emailRegex.test(email);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setLoading(true);

    if (!validateEmail()) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        subscriptionStatus: 'free tier',
      });

      setUser(user);
      setSuccessMessage('You have successfully registered. Redirecting to payment...');
      setTimeout(() => {
        setActiveScreen('mpesa');
      }, 2000);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email already taken. You may log in.');
        setActiveTab('login');
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setLoading(true);

    if (!validateEmail()) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user);

      const paymentsCollectionRef = collection(db, 'users', user.uid, 'payments');
      const paymentsSnapshot = await getDocs(paymentsCollectionRef);

      if (!paymentsSnapshot.empty) {
        let isPaid = false;
        paymentsSnapshot.forEach((doc) => {
          const paymentData = doc.data();
          if (paymentData.paymentStatus === 'paid') {
            isPaid = true;
          }
        });

        if (isPaid) {
          closeModal();
          navigate('/video-player');
        } else {
          setActiveScreen('mpesa');
        }
      } else {
        setActiveScreen('mpesa');
      }

      setSuccessMessage('You have successfully logged in.');
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>X</button>
        {activeScreen === 'auth' ? (
          <>
            <div className="tabs">
              <button
                className={activeTab === 'register' ? 'active' : ''}
                onClick={() => setActiveTab('register')}
              >
                Register
              </button>
              <button
                className={activeTab === 'login' ? 'active' : ''}
                onClick={() => setActiveTab('login')}
              >
                Log In
              </button>
            </div>

            {activeTab === 'register' ? (
              <form onSubmit={handleRegister}>
                <h3>Register</h3>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="password-input-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </span>
                </div>
                <div className="password-input-container">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <span
                    className="toggle-password"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                  </span>
                </div>
                <button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <div className="spinner2"></div>
                      <p>Processing, please wait...</p>
                    </>
                  ) : (
                    'Register'
                  )}
                </button>
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
              </form>
            ) : (
              <form onSubmit={handleLogin}>
                <h3>Log In</h3>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="password-input-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </span>
                </div>
                <button type="submit" disabled={loading}>
                  {loading ? <div className="spinner2"></div> : 'Log In'}
                </button>
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
              </form>
            )}
          </>
        ) : (
          <MpesaPaymentsUI closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default Modal;
