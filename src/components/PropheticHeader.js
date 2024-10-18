import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './PropheticHeader.css';

const PropheticHeader = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="header">
      <div className="header-content">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for video modules..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
        </form>
      </div>
    </header>
  );
};

export default PropheticHeader;