import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, change, icon: Icon, trend }) => {
  const isPositive = trend === 'up';

  return (
    <div className="stat-card">
      <div className="stat-header">
        <h4 className="stat-title">{title}</h4>
        {Icon && <Icon size={24} className="stat-icon" />}
      </div>
      <div className="stat-value">{value}</div>
      {change && (
        <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
          <span className="change-symbol">{isPositive ? '↑' : '↓'}</span>
          <span>{change}</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
