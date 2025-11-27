import React from 'react';

const Topbar = ({ onToggleSidebar, pageTitle = 'SMMG Medical Plaza' }) => {
  return (
    <header style={{ height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FFFFFF', paddingLeft: 20, paddingRight: 20, boxShadow: '0 1px 3px rgba(15,23,42,0.04)', borderBottom: '1px solid #E5E7EB' }}>
      {/* Left: Menu button + Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={onToggleSidebar} style={{ display: 'none', '@media (max-width: 768px)': { display: 'block' }, padding: 6, borderRadius: 8, backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth={2} style={{ width: 20, height: 20 }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#C94A4A', letterSpacing: '0.5px' }}>{pageTitle}</div>
        </div>
      </div>

      {/* Right: Notification + User Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* Notification Bell */}
        <button style={{ position: 'relative', padding: 6, borderRadius: 8, backgroundColor: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth={1.5} style={{ width: 18, height: 18 }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span style={{ position: 'absolute', top: 0, right: 0, width: 16, height: 16, borderRadius: '50%', backgroundColor: '#C94A4A', color: '#FFFFFF', fontSize: 10, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
        </button>

        {/* Settings Icon */}
        <button style={{ padding: 6, borderRadius: 8, backgroundColor: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth={1.5} style={{ width: 18, height: 18 }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        {/* Divider */}
        <div style={{ width: 1, height: 24, backgroundColor: '#E5E7EB', margin: '0 4px' }} />

        {/* User Profile (Avatar + Name) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/avatar.png" alt="avatar" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 4px rgba(15,23,42,0.06)' }} />
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: '#1F2937' }}>Clarklee B. Chan</div>
            <div style={{ fontSize: 11, color: '#9CA3AF', marginTop: 2 }}>041005</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
