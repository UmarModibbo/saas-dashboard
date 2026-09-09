import React, { useState } from 'react';
import { FiMenu, FiSun, FiMoon, FiSearch, FiBell, FiUser } from 'react-icons/fi';
import SearchBar from './SearchBar';
import './Header.css';

const Header = ({ onSidebarToggle, isDarkMode, onThemeToggle }) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={onSidebarToggle}>
          <FiMenu size={24} />
        </button>
        <SearchBar isActive={searchActive} setIsActive={setSearchActive} />
      </div>

      <div className="header-right">
        <button className="icon-btn" aria-label="Notifications">
          <FiBell size={20} />
          <span className="notification-badge">3</span>
        </button>
        <button className="icon-btn" onClick={onThemeToggle} aria-label="Toggle theme">
          {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
        <div className="user-profile">
          <div className="avatar">U</div>
          <span className="user-name">Umar</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
