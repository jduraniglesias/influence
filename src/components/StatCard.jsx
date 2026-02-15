import React from 'react';
import '../styles/StatCard.css';

const StatCard = ({ label, value, change, isHighlight }) => {
  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className={`stat-value ${isHighlight ? 'engagement-rate' : ''}`}>
        {value}
      </div>
      {change && (
        <div className={`stat-change ${change < 0 ? 'negative' : ''}`}>
          {change > 0 ? '+' : ''}{change}% this week
        </div>
      )}
    </div>
  );
};

export default StatCard;
