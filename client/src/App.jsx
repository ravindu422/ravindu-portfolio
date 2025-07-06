import React, { useEffect, useState } from 'react'
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const colors = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#EC4899'];
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 1,
      speedY: (Math.random() - 0.5) * 1,
      opacity: Math.random() * 0.5 + 0.3,
      color: Math.random() < 0.3 ? colors[Math.floor(Math.random() * colors.length)] : '#ffffff',
      isShining: false,
      shineIntensity: 0,
      nextShineTime: Math.random() * 5000 + 2000,
      lastShineTime: 0,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
  let animationId;
  const startTime = Date.now();
  
  const animateParticles = () => {
    const elapsed = Date.now() - startTime;
    
    setParticles(prevParticles => 
      prevParticles.map(particle => {
        const time = elapsed * 0.001; 
        
        const newX = particle.x + particle.speedX + Math.sin(time + particle.id) * 0.3;
        const newY = particle.y + particle.speedY + Math.cos(time + particle.id) * 0.3;

        let newShineIntesity = particle.shineIntensity;
        let newIsShining = particle.isShining;
        let newNextShineTime = particle.nextShineTime;

        if (!particle.isShining && elapsed - particle.lastShineTime > particle.nextShineTime) {
            newIsShining = true;
            newShineIntesity = 0;
        }

        if (particle.isShining) {
            newShineIntesity += 0.05;
            if (newShineIntesity >= 1) {
                newShineIntesity = 1;
                setTimeout(() => {
                    setParticles(prev => prev.map(p =>
                        p.id === particle.id
                        ? { ...p, isShining: false, shineIntensity: 0, lastShineTime: elapsed, nextShineTime: Math.random() * 5000 + 2000}
                        : p
                    ));
                }, 500)
            }
        }
        
        return {
          ...particle,
          x: newX > window.innerWidth ? 0 : newX < 0 ? window.innerWidth : newX,
          y: newY > window.innerHeight ? 0 : newY < 0 ? window.innerHeight : newY,
          shineIntensity: newShineIntesity,
          isShining: newIsShining,
          nextShineTime: newNextShineTime,
        };
      })
    );
    
    animationId = requestAnimationFrame(animateParticles);
  };
  
  animationId = requestAnimationFrame(animateParticles);
  return () => cancelAnimationFrame(animationId);
}, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FloatingParticle = ({ particle }) => {
    const shineSize = particle.size + (particle.shineIntensity * 4); 
    const shineOpacity = particle.opacity + (particle.shineIntensity * 0.5);

    return (
        <div
      className="absolute rounded-full pointer-events-none transition-all duration-100 ease-linear"
      style={{
        left: `${particle.x}px`,
        top: `${particle.y}px`,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        backgroundColor: particle.color,
        opacity: particle.opacity,
        boxShadow: particle.isShining 
          ? `0 0 ${particle.shineIntensity * 10}px ${particle.color}, 0 0 ${particle.shineIntensity * 20}px ${particle.color}40`
          : 'none',
        filter: particle.isShining 
          ? `brightness(${1 + particle.shineIntensity * 0.5})`
          : 'none',
      }}
    />
    );
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden'>
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

      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        {particles.map((particle) => (
          <FloatingParticle key={particle.id} particle={particle} />
        ))}
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-300 ease-out animate-pulse"
          style={{
            left: `${mousePosition.x / 10}px`,
            top: `${mousePosition.y / 10}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
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