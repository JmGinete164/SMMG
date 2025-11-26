import React from 'react';

const Topbar = ({ onToggleSidebar }) => {
  return (
    <header className="flex items-center justify-between bg-card px-4 md:px-6 py-3 shadow-sm">
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div>
          <div className="text-2xl font-semibold text-primary-red">SMMG Medical Plaza</div>
          <div className="text-sm text-muted">Patient Portal</div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-primary-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
        </button>

        <div className="flex items-center gap-3">
          <img src="/avatar.png" alt="avatar" className="w-10 h-10 rounded-full shadow-sm" />
          <div className="text-sm">
            <div className="font-medium">John Doe</div>
            <div className="text-xs text-muted">#A12345</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
