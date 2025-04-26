import React from 'react';
import Sidebar from '../components/Sidebar';
import { useLocation } from 'react-router-dom';

function DashboardOnlyLayout({ children }) {
  const location = useLocation();
  const hideSidebar = location.pathname === '/admindash-only';

  return (
    <div style={{ display: 'flex' }}>
      {!hideSidebar && <Sidebar />}
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
}

export default DashboardOnlyLayout;
