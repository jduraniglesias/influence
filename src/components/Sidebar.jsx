import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ currentPage }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { icon: '@', label: 'Account Overview', id: 'overview' },
    { icon: '💭', label: 'Ideas', id: 'ideas' },
    { icon: '🎯', label: 'Goals', id: 'goals' },
    { icon: '📊', label: 'Growth', id: 'growth' }
  ];

  const handleNavClick = (id) => {
    // TODO: Add navigation logic here when pages are ready
    console.log(`Navigate to: ${id}`);
  };

  return (
    <div 
      className={`sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button 
          className="nav-item"
          onClick={() => console.log('Navigate to profile')}
        >
          <span className="nav-icon">👤</span>
          <span className="nav-label">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;