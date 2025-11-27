import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  // fixed sizes for layout
  const sidebarWidthExpanded = 280; // px
  const sidebarWidthCollapsed = 64; // px - icon-only
  const topbarHeight = 56; // px - compact header
  const user = { name: 'Clarklee B. Chan', id: '041005' };
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Track the current route
  const location = useLocation();

  // Map routes to page titles
  const routeTitleMap = {
    '/': 'Home',
    '/chatbot': 'Chatbot',
    '/scheduling': 'Scheduling',
    '/history': 'Medical History',
    '/about': 'About',
  };

  // Get the current page title based on the route
  const pageTitle = routeTitleMap[location.pathname] || 'SMMG Medical Plaza';

  const activeSidebarWidth = sidebarCollapsed ? sidebarWidthCollapsed : sidebarWidthExpanded;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg, #f8fafc)' }}>
      {/* Fixed sidebar for desktop */}
      <div style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: activeSidebarWidth, backgroundColor: '#FFFFFF', borderRight: '1px solid #E5E7EB', zIndex: 30, overflowY: 'auto', transition: 'width 0.3s ease' }} className="hidden md:block">
        <Sidebar user={user} collapsed={sidebarCollapsed} onToggleCollapse={() => setSidebarCollapsed((s) => !s)} />
      </div>

      {/* Mobile sidebar overlay */}
      {showMobileSidebar && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50 }} className="md:hidden">
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.35)' }} onClick={() => setShowMobileSidebar(false)} />
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: sidebarWidthExpanded, padding: 16 }}>
            <Sidebar user={user} onClose={() => setShowMobileSidebar(false)} />
          </div>
        </div>
      )}

      {/* Topbar fixed to the right of the sidebar */}
      <div style={{ position: 'fixed', left: activeSidebarWidth, right: 0, top: 0, height: topbarHeight, zIndex: 40, transition: 'left 0.3s ease' }}>
        <Topbar onToggleSidebar={() => setShowMobileSidebar((s) => !s)} pageTitle={pageTitle} />
      </div>

      {/* Main content area - placed to the right of sidebar and below topbar */}
      <main style={{ marginLeft: activeSidebarWidth, marginTop: topbarHeight, padding: 24, minHeight: `calc(100vh - ${topbarHeight}px)`, overflow: 'auto', transition: 'margin-left 0.3s ease' }}>
        <div className="app-container" style={{ maxWidth: 1200, margin: '0 auto' }}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
