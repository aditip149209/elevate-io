// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b">
      <div className="w-full mx-auto flex flex-wrap justify-between items-center py-4 px-8">
        <h1 className="text-xl font-bold text-purple-600">Resume Builder</h1>
        
        {/* Hamburger button for mobile */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation links */}
        <nav className={`${
          isMenuOpen ? 'block' : 'hidden'
        } w-full lg:w-auto lg:flex space-y-4 lg:space-y-0 lg:space-x-6 text-gray-700 font-medium mt-4 lg:mt-0`}>
          <Link to="/" className="block lg:inline">Resume Builder App</Link>
          <Link to="/" className="block lg:inline">Resume Examples</Link>
          <Link to="/" className="block lg:inline">Resume Templates</Link>
          <Link to="/" className="block lg:inline">Cover Letter Builder</Link>
          <Link to="/" className="block lg:inline">Career Center</Link>
        </nav>

        {/* Build Resume button */}
        <button className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:block px-4 py-2 border rounded-lg text-orange-500 border-orange-300 hover:bg-orange-50 mt-4 lg:mt-0 w-full lg:w-auto`}>
          Build My Resume
        </button>
      </div>
    </header>
  );
}