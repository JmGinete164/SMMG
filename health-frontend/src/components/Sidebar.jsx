import React from 'react';
import { NavLink } from 'react-router-dom';

const Icon = ({ name, className = 'h-5 w-5' }) => {
  const icons = {
    Home: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.5L12 4l9 5.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.5z" />
      </svg>
    ),
    Chatbot: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    Scheduling: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
      </svg>
    ),
    'Medical History': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 8H7a2 2 0 01-2-2V7a2 2 0 012-2h3.5l2 2h3.5a2 2 0 012 2v11a2 2 0 01-2 2z" />
      </svg>
    ),
    About: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    ),
  };
  return icons[name] || null;
};

const Sidebar = ({ user, className = '', onClose }) => {
  const nav = [
    { name: 'Home', to: '/' },
    { name: 'Chatbot', to: '/chatbot' },
    { name: 'Scheduling', to: '/scheduling' },
    { name: 'Medical History', to: '/history' },
    { name: 'About', to: '/about' },
  ];

  return (
    <aside className={`w-72 bg-card h-screen sticky top-0 border-r border-gray-100 ${className}`}>
      {/* Logo Section - Centered */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px 16px', borderBottom: '1px solid #E5E7EB' }}>
        <img src="/logo192.png" alt="SMMG" style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', marginBottom: 12, boxShadow: '0 2px 8px rgba(15,23,42,0.08)' }} />
        <div style={{ fontSize: 13, fontWeight: 600, color: '#C94A4A', textAlign: 'center', letterSpacing: '0.3px' }}>SMMG Medical Plaza</div>
      </div>

      <nav className="mt-4 px-3 space-y-1">
        {nav.map((n) => (
          <NavLink key={n.name} to={n.to} className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            <span className="icon"><Icon name={n.name} /></span>
            <span className="font-medium">{n.name}</span>
          </NavLink>
        ))}
      </nav>

      {onClose && (
        <div className="md:hidden px-4 py-3">
          <button onClick={onClose} className="w-full btn-ghost">Close</button>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
