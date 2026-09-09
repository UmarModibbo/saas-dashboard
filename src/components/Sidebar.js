import React from 'react';
import { FiHome, FiBarChart2, FiSettings, FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = ({ isOpen, setIsOpen, isDarkMode }) => {
  const menuItems = [
    { id: 1, name: 'Dashboard', icon: FiHome, active: true },
    { id: 2, name: 'Analytics', icon: FiBarChart2, active: false },
    { id: 3, name: 'Settings', icon: FiSettings, active: false },
  ];

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">📊</div>
            <span className={isOpen ? '' : 'hidden'}>Dashboard</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul className="menu-list">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <a href="#" className={`menu-link ${item.active ? 'active' : ''}`}>
                    <Icon size={20} />
                    <span className={isOpen ? '' : 'hidden'}>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn">
            <FiLogOut size={20} />
            <span className={isOpen ? '' : 'hidden'}>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
