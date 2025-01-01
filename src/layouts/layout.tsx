import  { ReactNode } from 'react'; // Import ReactNode
import Sidenav from './sidenav';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactNode; // Define the children prop type
}

const Layout: React.FC<LayoutProps> = ({ children }) => { // Use React.FC and props interface
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4">
        <Header />
      </header>
      <div className="flex-grow flex">
        <aside className="w-64 bg-gray-200 p-4">
          <Sidenav />
        </aside>
        <main className="flex-grow p-6 bg-white overflow-y-auto">
          {children}
        </main>
      </div>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;