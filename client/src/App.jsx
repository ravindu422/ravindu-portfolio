import React, { useEffect, useState } from 'react'
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 t0-black text-white overflow-hidden'>
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse'
        style={{
          left: `${mousePosition.x / 10}px`,
          top: `${mousePosition.y / 10}px`,
          transform: 'translate(-50%, -50%)'
        }}/>
        <div className='absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-bounce'/>
        <div className='absolute bottom-1/4 left-1/4 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl animate-pulse'/>
      </div>
      <Navigation/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>

      <footer className='py-8 px-4 border-t border-gray-800'>
        <div className='max-w-6xl mx-auto text-center text-gray-400'>
          <p>&copy; 2025 Ravindu Thiranjaya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App