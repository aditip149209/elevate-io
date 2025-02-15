import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Stats from '../components/Stats.jsx';
import Companies from '../components/Companies.jsx';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Companies />
      <footer className="py-6 text-center text-gray-500">
        © 2025 Elevate IO | All rights reserved
      </footer>
    </>
  );
}