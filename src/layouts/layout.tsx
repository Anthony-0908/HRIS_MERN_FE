// src/layouts/Layout.tsx
import { ReactNode } from 'react';
import Sidenav from './sidenav';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children?: ReactNode; // ✅ Optional to support <Outlet />
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Optional Header */}
      {/* <header className="bg-white shadow-md p-4 sticky top-0 z-50">
        <Header />
      </header> */}

      <div className="flex flex-grow flex-col md:flex-row">
        <aside className="w-64 bg-gray-100 border-r overflow-y-auto md:flex md:flex-shrink-0">
          <Sidenav />
        </aside>

        <main className="flex-grow p-6 bg-gray-50">
          {children || <Outlet />}
        </main>
      </div>

      {/* Optional Footer */}
      {/* <footer className="bg-gray-800 text-white p-4 text-center">
        <Footer />
      </footer> */}
    </div>
  );
};

export default Layout;
