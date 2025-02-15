import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ResumeBuilder from './components/ResumeBuilder';

function App() {
  return (
    <>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<ResumeBuilder />} />
      </Routes>
    </>
  );
}

export default App;