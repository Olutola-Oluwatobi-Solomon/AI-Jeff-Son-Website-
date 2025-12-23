
import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-amber-500 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 max-w-3xl mx-auto leading-tight">
          Need reliable repairs right now? <br />
          We’re ready—day or night.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white text-xl font-bold px-10 py-5 rounded-2xl transition-all shadow-2xl flex items-center justify-center space-x-3 transform hover:scale-105"
          >
            <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
          
          <a 
            href={`mailto:${BUSINESS_INFO.email}`}
            className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-slate-900 text-xl font-bold px-10 py-5 rounded-2xl transition-all flex items-center justify-center space-x-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span>Email Us</span>
          </a>
        </div>
        
        <p className="mt-8 font-bold text-slate-800/60 uppercase tracking-widest text-sm">
          Response time typically under 60 minutes for emergencies.
        </p>
      </div>
    </section>
  );
};
