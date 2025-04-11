import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#home">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-12 text-lg font-semibold">
          {['home', 'about', 'services', 'portfolio', 'contact'].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="relative group hover:text-red-400"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-500 group-hover:w-full transition-all duration-700 ease-in-out"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu (dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 pb-4 space-y-4">
          {['home', 'about', 'services', 'portfolio', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="block text-lg font-semibold hover:text-red-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
