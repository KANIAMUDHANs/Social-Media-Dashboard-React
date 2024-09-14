// ContactsSidebar.js
import React from 'react';
import './Sidebar.css';

const contacts = [
  { name: 'Harsith Surana', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', online: true },
  { name: 'Sam Sam Anderson', avatar: 'https://randomuser.me/api/portraits/men/2.jpg', online: true },
  { name: 'Bharathi Raja', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', lastSeen: '1h' },
  { name: 'Paul Dhinakaran', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { name: 'Karthick Rj', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { name: 'Balaji B', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
  { name: 'Siddarth Siddhu', avatar: 'https://randomuser.me/api/portraits/men/7.jpg',lastSeen: '1h' },
  { name: 'Joshua', avatar: 'https://randomuser.me/api/portraits/men/8.jpg' },
  { name: 'மீகாந்த்', avatar: 'https://randomuser.me/api/portraits/men/9.jpg' },
  { name: 'Domminic Jerry Stephen', avatar: 'https://randomuser.me/api/portraits/men/10.jpg' },
  { name: 'Jesusam', avatar: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { name: 'Velkumar C', avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { name: 'Pradan Kandan', avatar: 'https://randomuser.me/api/portraits/men/13.jpg' },
  { name: 'Allan Abisheik', avatar: 'https://randomuser.me/api/portraits/men/14.jpg' }
];

const Sidebar = () => {
  return (
    <div className="contacts-sidebar">
      <div className="contacts-sidebar__header">
        <h2>Contacts</h2>
        <div className="contacts-sidebar__icons">
          <span>🔍</span>
          <span>⋮</span>
        </div>
      </div>

      <div className="contacts-sidebar__list">
        {contacts.map((contact, index) => (
          <div className="contact-item" key={index}>
            <img src={contact.avatar} alt={contact.name} className="contact-item__avatar" />
            <div className="contact-item__info">
              <h4>{contact.name}</h4>
              {contact.online && <span className="contact-item__online-status">●</span>}
              {contact.lastSeen && <span className="contact-item__last-seen">{contact.lastSeen}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
