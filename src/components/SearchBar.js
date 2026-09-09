import React, { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import './SearchBar.css';

const SearchBar = ({ isActive, setIsActive }) => {
  const [query, setQuery] = useState('');

  const handleClear = () => {
    setQuery('');
  };

  return (
    <div className={`search-bar ${isActive ? 'active' : ''}`}>
      <FiSearch className="search-icon" size={18} />
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <button className="clear-btn" onClick={handleClear}>
          <FiX size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
