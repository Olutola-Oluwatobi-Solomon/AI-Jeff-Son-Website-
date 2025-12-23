
import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8">Get In Touch</h2>
            <p className="text-lg text-slate-600 mb-10">
              Need immediate help or want to schedule a routine check? Our family is ready to assist yours.
            </p>
            
            <div className="space-y-8">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center mr-6 group-hover:bg-amber-500 group-hover:text-white transition-all text-amber-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Call Anytime</p>
                  <p className="text-xl font-bold text-slate-900">{BUSINESS_INFO.phone}</p>
                </div>
              </a>
              
              <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center mr-6 group-hover:bg-amber-500 group-hover:text-white transition-all text-amber-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email Our Shop</p>
                  <p className="text-xl font-bold text-slate-900">{BUSINESS_INFO.email}</p>
                </div>
              </a>

              <div className="flex items-center group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center mr-6 text-amber-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Find Us</p>
                  <p className="text-xl font-bold text-slate-900">Townshend, Vermont, USA</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center space-x-4">
              <a 
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2 hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                <span>Follow on Facebook</span>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 min-h-[400px] relative">
            {/* Simple Map Placeholder */}
            <div className="absolute inset-0 bg-slate-200">
               <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2070&auto=format&fit=crop" 
                alt="Map area of Townshend" 
                className="w-full h-full object-cover grayscale opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center">
                    <div className="w-12 h-12 bg-amber-500 rounded-full animate-ping absolute opacity-20"></div>
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-slate-900 relative z-10">
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
                    </div>
                    <p className="mt-4 font-bold text-slate-900">Townshend, VT</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
