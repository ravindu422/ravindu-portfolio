import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavItem = ({ href, children, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          <div className="hidden md:flex space-x-8">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <NavItem href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavItem>
              <NavItem href="#about" onClick={() => setIsMenuOpen(false)}>About</NavItem>
              <NavItem href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</NavItem>
              <NavItem href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</NavItem>
              <NavItem href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavItem>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;