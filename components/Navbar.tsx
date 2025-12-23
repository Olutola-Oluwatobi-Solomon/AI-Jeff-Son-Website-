
import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900 shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center font-bold text-slate-900 italic">AJ</div>
          <span className={`text-xl font-bold tracking-tight text-white`}>
            Al Jeffers <span className="text-amber-500">& Sons</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/90">
          <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
          <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
          <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
          <a 
            href={`tel:${BUSINESS_INFO.phone}`} 
            className="bg-amber-500 text-slate-900 px-5 py-2 rounded-full font-bold hover:bg-amber-400 transition-colors flex items-center space-x-2"
          >
            <span>Call 24/7</span>
          </a>
        </div>
        
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
