import React, { useState } from 'react';
import './PropheticTeachings.css';
import Modal from './Modal'; // Import the Modal component

const PropheticTeachings = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="prophetic-teachings-section">
      <div className="prophetic-teachings-content">
        <h2>Prophetic Teachings</h2>
        <p>
          Discover the power and significance of prophecies through our comprehensive video module teachings.
          Learn how to interpret and understand prophecies and apply them to your spiritual journey.
        </p>
        <p>
          Our prophetic teachings are designed to guide you on a deeper path of faith, helping you to connect
          with God's vision and purpose for your life. These teachings are available in video modules,
          accessible only to registered members.
        </p>
        <div className="auth-buttons">
          <button className="register-button" onClick={() => setShowModal(true)}>Register or LOG IN</button>
        </div>
      </div>

      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </div>
  );
};

export default PropheticTeachings;
