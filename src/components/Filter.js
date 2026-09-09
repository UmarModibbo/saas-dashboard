import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import './Filter.css';

const Filter = ({ label, options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="filter-container">
      <button className="filter-btn" onClick={() => setIsOpen(!isOpen)}>
        <span>{label}</span>
        <FiChevronDown size={16} className={isOpen ? 'open' : ''} />
      </button>
      {isOpen && (
        <div className="filter-dropdown">
          {options.map((option) => (
            <button
              key={option.value}
              className={`filter-option ${value === option.value ? 'selected' : ''}`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
