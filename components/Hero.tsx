
import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop" 
          alt="Technician working" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center text-white">
        <div className="inline-block px-4 py-1 bg-amber-500 text-slate-900 font-bold rounded-full mb-6 animate-bounce">
          24/7 EMERGENCY RESPONSE
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Reliable Repair Services — <br />
          <span className="text-amber-500">Available 24/7</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Family-owned expertise you can trust, serving Townshend, Vermont and surrounding areas for generations.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-900 text-lg font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl shadow-amber-500/20"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>Call Now: {BUSINESS_INFO.phone}</span>
          </a>
          <div className="flex gap-4 w-full sm:w-auto">
            <a 
              href={`mailto:${BUSINESS_INFO.email}`}
              className="flex-1 sm:flex-none border-2 border-white/30 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-center"
            >
              Email Us
            </a>
            <a 
              href={BUSINESS_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none border-2 border-white/30 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-center"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse hidden md:block">
        <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};
