import Sidebar from '@/components/Sidebar';

function ProjectNamePageLayout({ children }) {
  return (
    <section className="flex h-full">
      <Sidebar />
      {children}
    </section>
  );
}

export default ProjectNamePageLayout;
