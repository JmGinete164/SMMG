import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  const user = { name: 'John Doe', id: 'A12345' };
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-bg flex">
      {/* desktop sidebar */}
      <div className="hidden md:block">
        <Sidebar user={user} />
      </div>

      {/* mobile sidebar overlay */}
      {showMobileSidebar && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setShowMobileSidebar(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 p-4">
            <Sidebar user={user} onClose={() => setShowMobileSidebar(false)} />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col min-h-screen">
        <Topbar onToggleSidebar={() => setShowMobileSidebar((s) => !s)} />

        <main className="p-6 md:p-8 flex-1 overflow-auto min-h-0">
          <div className="app-container">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
