import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar Container - Fixed */}
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      
      {/* Main Content Area - Scrollable */}
      <div className='flex-1 bg-[#F9FAFB] overflow-y-auto'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;