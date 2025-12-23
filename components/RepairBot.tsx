
import React, { useState } from 'react';
import { getRepairDiagnostic } from '../services/geminiService';
import { BUSINESS_INFO } from '../constants';

export const RepairBot: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    const result = await getRepairDiagnostic(input);
    setResponse(result || "Something went wrong. Please call us.");
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-w-4xl mx-auto -mt-20 relative z-30">
      <div className="bg-slate-900 text-white p-8 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-1">Repair Insight AI</h3>
          <p className="text-slate-400 text-sm">Get an instant assessment from our digital technician</p>
        </div>
        <div className="hidden sm:block">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-amber-500 flex items-center justify-center font-bold text-slate-900">AI</div>
            <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center">🔧</div>
          </div>
        </div>
      </div>
      
      <div className="p-8">
        {!response ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-slate-700 font-bold mb-2">Describe the issue:</label>
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Example: My truck engine is making a clicking sound and won't start..."
                className="w-full h-32 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                required
              />
            </div>
            <button 
              disabled={isLoading}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-all ${
                isLoading ? 'bg-slate-200 text-slate-400' : 'bg-amber-500 hover:bg-amber-400 text-slate-900 shadow-lg shadow-amber-500/20'
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Analyzing Issue...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  <span>Get Diagnostic Assessment</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <h4 className="font-bold text-amber-800 mb-2">Technician's Insight:</h4>
              <p className="text-slate-800 leading-relaxed whitespace-pre-wrap">{response}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex-1 bg-slate-900 text-white py-4 rounded-xl font-bold text-center hover:bg-slate-800 transition-all flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                <span>Call Technician Now</span>
              </a>
              <button 
                onClick={() => { setResponse(null); setInput(''); }}
                className="flex-1 bg-slate-100 text-slate-700 py-4 rounded-xl font-bold text-center hover:bg-slate-200 transition-all"
              >
                Ask Another Question
              </button>
            </div>
            <p className="text-xs text-slate-400 text-center">
              Note: This AI diagnostic is for guidance only. Always consult a certified professional before attempting repairs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
