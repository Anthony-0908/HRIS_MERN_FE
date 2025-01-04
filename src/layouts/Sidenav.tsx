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
      {/* Hamburger Menu Icon (Visible only on small screens) */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 text-gray-800 focus:outline-none md:hidden" // Hide on large screens (md and above)
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 min-h-screen w-64 bg-gray-200 p-4 transition-transform duration-300 ease-in-out transform z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:block`}
      >
        <div className="pt-16 md:pt-4">
          <h2 className="text-lg font-bold mb-4">Sidebar</h2>
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 px-4 text-gray-700 rounded hover:bg-gray-300 ${
                  isActive ? 'bg-gray-300 font-semibold' : ''
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 px-4 text-gray-700 rounded hover:bg-gray-300 ${
                  isActive ? 'bg-gray-300 font-semibold' : ''
                }`
              }
            >
              About
            </NavLink>
            {/* Add more NavLinks as needed */}
          </nav>
        </div>
      </aside>

      {/* Overlay (Visible only on small screens when sidebar is open) */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 md:hidden"
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Sidenav;
