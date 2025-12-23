
import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center font-bold text-slate-900 italic">AJ</div>
              <span className="text-2xl font-bold tracking-tight">
                Al Jeffers <span className="text-amber-500">& Sons</span>
              </span>
            </div>
            <p className="text-slate-400 text-lg max-w-md mb-8">
              Townshend's leading choice for 24/7 repair services. Family-owned, dependable, and committed to excellence in every job we take.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Emergency Call</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">📞</span>
                <span>{BUSINESS_INFO.phone}</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">✉️</span>
                <span>{BUSINESS_INFO.email}</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">⏰</span>
                <span>Open 24/7/365</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">📍</span>
                <span>Townshend, VT 05353</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built for reliability, serving Vermont.</p>
        </div>
      </div>
    </footer>
  );
};
