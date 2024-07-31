import React from 'react';
import '../Header.css';

function Header() {
  return (
    <div className="header">
      <div className="greeting">
        <h2>Good Morning!</h2>
        <span>Welcome Back!</span>
      </div>
      <div className="header-actions">
        <input type="text" placeholder="Search" />
        <div className="profile">
          <img src="profile_picture_url" alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Header;
