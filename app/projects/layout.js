import Sidebar from '@/components/Sidebar';
import React from 'react';

function ProjectLayout({ children }) {
  return (
    <div className="flex h-full">
      <Sidebar />
      {children}
    </div>
  );
}

export default ProjectLayout;
