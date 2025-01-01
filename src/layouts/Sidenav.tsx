import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu Icon (Always Visible) */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 text-gray-800 focus:outline-none mx-56" // Removed md:hidden
      >
        {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
      </button>

      {/* Sidebar - Now always positioned based on isOpen */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-200 p-4 transition-transform duration-300 ease-in-out transform z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`} // Removed md:translate-x-0 and md:block
      >
        <div className="pt-16 md:pt-0">
          <h2 className="text-lg font-bold mb-4">Sidebar</h2>
          <nav>
            <NavLink to="/" className="block py-2 text-gray-700 hover:bg-gray-300 rounded" end>
              Home
            </NavLink>
            <NavLink to="/about" className="block py-2 text-gray-700 hover:bg-gray-300 rounded">
              About
            </NavLink>
            {/* Add more NavLinks as needed */}
          </nav>
        </div>
      </aside>

      {/* Overlay (Always applies when open) */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed top-0 left-0 w-full h-full  z-30" // Removed md:hidden
        ></div>
      )}
    </>
  );
};

export default Sidenav;