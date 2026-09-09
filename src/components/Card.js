import React from 'react';
import './Card.css';

const Card = ({ title, children, className = '', icon: Icon }) => {
  return (
    <div className={`card ${className}`}>
      {(title || Icon) && (
        <div className="card-header">
          {Icon && <Icon size={24} className="card-icon" />}
          {title && <h3 className="card-title">{title}</h3>}
        </div>
      )}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;
