import React from 'react';
import { NavLink } from 'react-router-dom';

const Icon = ({ name, className = 'h-5 w-5' }) => {
  const icons = {
    Home: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: 20, height: 20 }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.5L12 4l9 5.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.5z" />
      </svg>
    ),
    Chatbot: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: 20, height: 20 }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    Scheduling: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: 20, height: 20 }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
      </svg>
    ),
    'Medical History': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: 20, height: 20 }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 8H7a2 2 0 01-2-2V7a2 2 0 012-2h3.5l2 2h3.5a2 2 0 012 2v11a2 2 0 01-2 2z" />
      </svg>
    ),
    About: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: 20, height: 20 }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    ),
  };
  return icons[name] || null;
};

const Sidebar = ({ user, className = '', onClose, collapsed = false, onToggleCollapse }) => {
  const nav = [
    { name: 'Home', to: '/', icon: 'Home' },
    { name: 'Chatbot', to: '/chatbot', icon: 'Chatbot' },
    { name: 'Scheduling', to: '/scheduling', icon: 'Scheduling' },
    { name: 'Medical History', to: '/history', icon: 'Medical History' },
    { name: 'About', to: '/about', icon: 'About' },
  ];

  return (
    <aside style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
      {/* Toggle Button + Logo Section */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'space-between', padding: collapsed ? '12px 8px' : '20px 16px', borderBottom: '1px solid #E5E7EB', position: 'relative' }}>
        {/* Logo & Text (hidden when collapsed) */}
        {!collapsed && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
            <img src="/logo192.png" alt="SMMG" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px rgba(15,23,42,0.08)' }} />
            <div style={{ fontSize: 12, fontWeight: 600, color: '#C94A4A', letterSpacing: '0.3px', whiteSpace: 'nowrap' }}>SMMG Medical Plaza</div>
          </div>
        )}

        {/* Logo only (visible when collapsed) */}
        {collapsed && (
          <img src="/logo192.png" alt="SMMG" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px rgba(15,23,42,0.08)' }} />
        )}

        {/* Toggle Button */}
        {onToggleCollapse && (
          <button onClick={onToggleCollapse} style={{ padding: 6, borderRadius: 6, backgroundColor: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF', transition: 'all 0.2s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 18, height: 18, transform: collapsed ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
      </div>

      {/* Navigation Menu */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: collapsed ? '8px 4px' : '12px 8px' }}>
        {nav.map((n) => (
          <NavLink key={n.name} to={n.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: collapsed ? 0 : 12, padding: collapsed ? '10px 8px' : '10px 12px', borderRadius: 8, textDecoration: 'none', color: '#6B7280', fontSize: 13, fontWeight: 500, transition: 'all 0.2s', justifyContent: collapsed ? 'center' : 'flex-start' }}>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={n.icon} /></span>
            {!collapsed && <span>{n.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Close button for mobile */}
      {onClose && !collapsed && (
        <div style={{ padding: '12px 8px', borderTop: '1px solid #E5E7EB' }}>
          <button onClick={onClose} style={{ width: '100%', padding: '8px 12px', borderRadius: 8, backgroundColor: '#F3F4F6', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500, color: '#6B7280' }}>Close</button>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
