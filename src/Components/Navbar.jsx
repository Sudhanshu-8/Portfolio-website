import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo on the left */}
        <a href="#home">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Navigation links */}
        <ul className="flex space-x-12 text-lg font-semibold">
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
    </nav>
  );
}
