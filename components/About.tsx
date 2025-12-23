
import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1590674033314-1423403b95d0?q=80&w=2070&auto=format&fit=crop" 
                alt="Workshop environment" 
                className="rounded-2xl shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500 rounded-2xl -z-0 hidden md:block"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h4 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">Quality Since Decades</h4>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8">About Al Jeffers & Sons</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We are a family-owned and operated repair service dedicated to keeping our community running. 
              With years of combined experience and a "do-it-right" philosophy, we handle everything 
              from minor maintenance to complex emergency repairs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <p className="text-slate-400 text-sm mb-1">Our Location</p>
                <p className="font-bold text-slate-800">{BUSINESS_INFO.address}</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <p className="text-slate-400 text-sm mb-1">Hours of Operation</p>
                <p className="font-bold text-slate-800">{BUSINESS_INFO.hours}</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <p className="text-slate-400 text-sm mb-1">Direct Line</p>
                <p className="font-bold text-slate-800">{BUSINESS_INFO.phone}</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <p className="text-slate-400 text-sm mb-1">Email Us</p>
                <p className="font-bold text-slate-800">{BUSINESS_INFO.email}</p>
              </div>
            </div>
            <a href="#contact" className="inline-flex items-center space-x-2 text-slate-900 font-bold hover:text-amber-600 transition-colors">
              <span>Learn more about our team</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
