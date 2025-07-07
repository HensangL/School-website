import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // fixed: should be react-router-dom

const Navbar = () => {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-container bg-white shadow-md">
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold text-purple-600">School Name</div>
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-gray-700 text-lg">
          <li><Link to="/">Home</Link></li>

          <li className="relative"
              onMouseEnter={() => setShowAbout(true)}
              onMouseLeave={() => setShowAbout(false)}>
            <Link to="/about">About</Link>
            {showAbout && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 flex flex-col">
                <Link to="/principal" className="px-4 py-2 hover:bg-purple-100">Principal's message</Link>
                <Link to="/chairman" className="px-4 py-2 hover:bg-purple-100">Chairman's message</Link>
                <Link to="/team" className="px-4 py-2 hover:bg-purple-100">Meet the teachers</Link>
              </div>
            )}
          </li>

          <li><Link to="/contact">Contact</Link></li>

          <li className="relative"
              onMouseEnter={() => setShowLoginDropdown(true)}
              onMouseLeave={() => setShowLoginDropdown(false)}>
            <span className="cursor-pointer">Login</span>
            {showLoginDropdown && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 flex flex-col">
                <Link to="/admin" className="px-4 py-2 hover:bg-purple-100">Admin Login</Link>
                <Link to="/student" className="px-4 py-2 hover:bg-purple-100">Student Login</Link>
                <Link to="/teacher" className="px-4 py-2 hover:bg-purple-100">Teacher Login</Link>
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col px-6 pb-4 space-y-4 text-gray-700 text-base">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>

          <li>
            <details className="group">
              <summary className="cursor-pointer">About</summary>
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <Link to="/principal" onClick={() => setMenuOpen(false)}>Principal's message</Link>
                <Link to="/chairman" onClick={() => setMenuOpen(false)}>Chairman's message</Link>
                <Link to="/team" onClick={() => setMenuOpen(false)}>Meet the teachers</Link>
              </div>
            </details>
          </li>

          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

          <li>
            <details className="group">
              <summary className="cursor-pointer">Login</summary>
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <Link to="/admin" onClick={() => setMenuOpen(false)}>Admin Login</Link>
                <Link to="/student" onClick={() => setMenuOpen(false)}>Student Login</Link>
                <Link to="/teacher" onClick={() => setMenuOpen(false)}>Teacher Login</Link>
              </div>
            </details>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
