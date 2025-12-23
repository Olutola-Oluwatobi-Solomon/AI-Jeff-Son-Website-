
import React from 'react';

export const Accessibility: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-24 -mt-24 opacity-10">
        <svg className="w-96 h-96" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm-1 5a1 1 0 100 2 1 1 0 000-2zm1.25 4h-2.5v1h1v4h-1v1h3.5v-1h-1v-5z"/></svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold mb-6">Accessible & Customer-Focused</h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              We believe quality repair services should be available to everyone. Our facility is fully equipped to accommodate all customers comfortably.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-500 rounded-lg text-slate-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Wheelchair-Accessible Car Park</h4>
                  <p className="text-slate-400">Designated parking spaces and barrier-free access directly to our service bay.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-500 rounded-lg text-slate-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-11a1 1 0 100-2 1 1 0 000 2zm1.25 4h-2.5v1h1v4h-1v1h3.5v-1h-1v-5z"/></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Inclusive Support</h4>
                  <p className="text-slate-400">Our team is trained to assist customers with diverse needs, ensuring a smooth service experience.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-5/12">
            <div className="p-10 bg-slate-800 rounded-3xl border border-white/5 relative shadow-2xl">
              <div className="absolute top-0 left-0 bg-amber-500 px-4 py-1 text-slate-900 font-bold rounded-br-xl text-xs uppercase tracking-widest">Core Values</div>
              <blockquote className="text-2xl font-medium italic mb-6">
                "Fast, reliable service is our promise, but treating every customer with dignity and respect is our priority."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center font-bold">AJ</div>
                <div>
                  <p className="font-bold">Al Jeffers</p>
                  <p className="text-slate-500 text-sm">Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
