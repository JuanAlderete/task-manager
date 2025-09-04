import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <section className="flex h-screen">
      <Sidebar
        className="w-1/10 min-w-40"
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="flex flex-col w-full">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </section>
  );
}

export default Layout;