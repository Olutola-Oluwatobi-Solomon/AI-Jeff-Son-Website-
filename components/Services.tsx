
import React from 'react';

const ServiceCard = ({ title, description, icon, tag }: { title: string, description: string, icon: React.ReactNode, tag?: string }) => (
  <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
    {tag && (
      <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black px-4 py-1 uppercase tracking-tighter">
        {tag}
      </div>
    )}
    <div className="w-16 h-16 bg-slate-900 text-amber-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6">
      {description}
    </p>
    <ul className="space-y-3 mb-8">
      <li className="flex items-center text-sm font-medium text-slate-500">
        <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
        Certified Technicians
      </li>
      <li className="flex items-center text-sm font-medium text-slate-500">
        <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
        Quality Parts Guaranteed
      </li>
    </ul>
    <button className="text-slate-900 font-bold group-hover:text-amber-600 flex items-center space-x-2">
      <span>Request Quote</span>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
    </button>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h4>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Our Repair Services</h2>
          <p className="text-lg text-slate-600">
            From heavy-duty mechanical fixes to delicate home repairs, Al Jeffers & Sons brings precision and speed to every job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <ServiceCard 
            title="General Repair Services"
            description="Our core maintenance and diagnostics services. We fix everything from engines to electrical systems with meticulous attention to detail."
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
          />
          <ServiceCard 
            tag="24/7 LIVE"
            title="Emergency Repairs"
            description="Breakdowns don't wait for business hours. Neither do we. Our mobile unit is ready to assist you day or night, rain or shine."
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};
