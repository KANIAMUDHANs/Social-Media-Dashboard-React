// Sidebar.js
import React from 'react';
import './Sidenav.css';
import { FaFacebook, FaUserFriends, FaClock, FaBookmark, FaUsers, FaStore } from 'react-icons/fa';

const Sidenav = () => {
  return (
    <div className="sidebar">
      {/* Top Section with Facebook icon and search */}
      <div className="sidebar__top">
        <FaFacebook className="sidebar__facebook-icon" />
        <input 
          type="text" 
          placeholder="Search Facebook" 
          className="sidebar__search-input" 
        />
      </div>

      {/* User Profile Section */}
      <div className="sidebar__user">
        <img 
          src="https://randomuser.me/api/portraits/men/1.jpg" 
          alt="Profile" 
          className="sidebar__profile-pic" 
        />
        <span>Kaní Amúdhan</span>
      </div>

      {/* Navigation Links */}
      <div className="sidebar__nav">
        <SidebarItem icon={<FaUserFriends />} label="Friends" />
        <SidebarItem icon={<FaClock />} label="Memories" />
        <SidebarItem icon={<FaBookmark />} label="Saved" />
        <SidebarItem icon={<FaUsers />} label="Groups" />
        <SidebarItem icon={<FaStore />} label="Marketplace" />
        <SidebarItem icon="🔽" label="See more" />
      </div>

      {/* Shortcuts */}
      <div className="sidebar__shortcuts">
        <h4>Your Shortcuts</h4>
        <SidebarShortcut 
          icon="https://via.placeholder.com/20" 
          label="News 7Tamil Live" 
        />
        <SidebarShortcut 
          icon="https://via.placeholder.com/20" 
          label="Used Cars and Bikes Chennai" 
        />
        <SidebarShortcut 
          icon="https://via.placeholder.com/20" 
          label="Chennai Job Search (CJS)" 
        />
        <SidebarShortcut 
          icon="https://via.placeholder.com/20" 
          label="8 Ball Pool" 
        />
        <SidebarShortcut 
          icon="https://via.placeholder.com/20" 
          label="Candy Crush Saga" 
        />
        <SidebarItem icon="🔽" label="See more" />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => {
  return (
    <div className="sidebar__item">
      <span className="sidebar__icon">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

const SidebarShortcut = ({ icon, label }) => {
  return (
    <div className="sidebar__shortcut">
      <img src={icon} alt={label} className="sidebar__shortcut-icon" />
      <span>{label}</span>
    </div>
  );
};

export default Sidenav;
