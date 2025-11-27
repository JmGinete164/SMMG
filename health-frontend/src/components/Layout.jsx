import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  // fixed sizes for layout
  const sidebarWidth = 280; // px
  const topbarHeight = 64; // px
  const user = { name: 'Clarklee B. Chan', id: '041005' };
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg, #f8fafc)' }}>
      {/* Fixed sidebar for desktop */}
      <div style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: sidebarWidth, backgroundColor: '#FFFFFF', borderRight: '1px solid #E5E7EB', zIndex: 30, overflowY: 'auto' }} className="hidden md:block">
        <Sidebar user={user} />
      </div>

      {/* Mobile sidebar overlay */}
      {showMobileSidebar && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50 }} className="md:hidden">
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.35)' }} onClick={() => setShowMobileSidebar(false)} />
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: sidebarWidth, padding: 16 }}>
            <Sidebar user={user} onClose={() => setShowMobileSidebar(false)} />
          </div>
        </div>
      )}

      {/* Topbar fixed to the right of the sidebar */}
      <div style={{ position: 'fixed', left: sidebarWidth, right: 0, top: 0, height: topbarHeight, zIndex: 40 }}>
        <Topbar onToggleSidebar={() => setShowMobileSidebar((s) => !s)} />
      </div>

      {/* Main content area - placed to the right of sidebar and below topbar */}
      <main style={{ marginLeft: sidebarWidth, marginTop: topbarHeight, padding: 24, minHeight: `calc(100vh - ${topbarHeight}px)`, overflow: 'auto' }}>
        <div className="app-container" style={{ maxWidth: 1200, margin: '0 auto' }}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
