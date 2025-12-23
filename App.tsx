
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { Accessibility } from './components/Accessibility';
import { RepairBot } from './components/RepairBot';
import { CTASection } from './components/CTASection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <About />
        
        <div className="bg-slate-50 py-12">
          <div className="container mx-auto px-4 md:px-8">
            <RepairBot />
          </div>
        </div>

        <Services />
        <Accessibility />
        <CTASection />
        <Contact />
      </main>

      <Footer />
      
      {/* Quick Mobile Sticky Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="tel:+18023654447" 
          className="w-16 h-16 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center shadow-2xl animate-pulse"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
