import React from 'react';
import '../styles/Header.css';

const Header = ({ profile }) => {
  // Get initials from username for profile picture
  const getInitials = (username) => {
    return username
      .split(/[._]/)
      .slice(0, 2)
      .map(part => part[0]?.toUpperCase())
      .join('');
  };

  return (
    <header className="header">
      <div className="profile-section">
        <div className="profile-pic">
          {getInitials(profile.username)}
        </div>
        <div className="profile-info">
          <h1>@{profile.username}</h1>
          <p className="profile-bio">{profile.biography}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
