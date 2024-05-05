import Sidebar from '@/components/Sidebar';
import React from 'react';

function ProjectLayout({ children }) {
  return (
    <section className="flex h-full">
      <Sidebar />
      {children}
    </section>
  );
}

export default ProjectLayout;
