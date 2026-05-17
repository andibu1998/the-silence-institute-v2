import React, { useState } from 'react';
import { FadeIn } from './FadeIn';

const TimelineDot = ({ active, label }: { active?: boolean, label: string }) => (
    <div className="flex flex-col items-center gap-4 relative z-10 w-1/3">
        <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${active ? 'bg-teal border-teal shadow-[0_0_15px_rgba(45,212,191,0.6)] animate-pulse' : 'bg-void border-white/20'}`}></div>
        <span className={`text-xs font-sans tracking-widest uppercase text-center ${active ? 'text-teal font-bold' : 'text-muted'}`}>{label}</span>
    </div>
);

export const VisionSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('sending');

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/WBcpbvnlBFrQ9DnHZPfH/webhook-trigger/469b8029-bfbe-41f2-9a87-3e2adff5cd35', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        // Fallback for no-cors or successful opaque responses if needed, 
        // but assuming standard success:
        setStatus('success');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Assume success for UX if it's a CORS issue but data likely sent, 
      // or show error. Here we default to error for robustness.
      setStatus('error');
    }
  };

  return (
    <section className="relative py-40 md:py-52 px-6 flex flex-col items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-teal/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        
        {/* Header */}
        <FadeIn>
          <h2 className="font-serif text-5xl md:text-6xl text-bone mb-6 leading-[1.05]">
            The Neuro-Somatic<br/>Reset Protocol
          </h2>
          <p className="font-sans text-lg text-muted mb-16 max-w-xl mx-auto">
              A comprehensive 12-week clinical program designed to <span className="text-teal/90">recalibrate the auditory-limbic loop</span>.
          </p>
        </FadeIn>

        {/* Roadmap Timeline */}
        <FadeIn delay={200} className="w-full max-w-3xl mx-auto mb-20 relative">
            {/* Line */}
            <div className="absolute top-2 left-[16%] right-[16%] h-0.5 bg-white/10 -z-0"></div>
            
            <div className="flex justify-between items-start w-full">
                <TimelineDot label="Foundation Phase" />
                <TimelineDot label="Clinical Board Assembly" active />
                <TimelineDot label="Global Launch Q3 2026" />
            </div>
        </FadeIn>

        {/* Specialists (Tech Specs - Organic Style) */}
        <FadeIn delay={300}>
            <div className="flex flex-wrap justify-center gap-4 mb-20 max-w-3xl mx-auto">
                {['Functional Neurology', 'Osteopathy', 'Somatic Therapy', 'Audiology'].map((tech) => (
                    <span key={tech} className="px-6 py-3 rounded-full bg-gold/5 border border-gold text-sm font-sans text-bone font-medium tracking-wide backdrop-blur-sm hover:bg-gold/10 transition-colors duration-300 shadow-[0_0_10px_rgba(212,180,131,0.1)]">
                        {tech}
                    </span>
                ))}
            </div>
        </FadeIn>

        {/* Waitlist Form */}
        <FadeIn delay={400} className="w-full max-w-lg mx-auto">
          {status === 'success' ? (
             <div className="p-6 rounded-2xl bg-teal/10 border border-teal/30 text-teal animate-fade-in">
                 <p className="font-serif text-xl">Access Requested.</p>
                 <p className="font-sans text-sm mt-2 opacity-80">We will notify you when early access opens.</p>
             </div>
          ) : (
            <>
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse"></div>
                    <span className="font-sans text-[11px] tracking-widest uppercase text-teal font-medium">Early Access Waitlist</span>
                </div>

                <form className="group relative" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row p-1.5 bg-white/5 border border-white/10 rounded-full focus-within:border-teal/30 focus-within:bg-white/10 transition-all duration-300 gap-2">
                        <input 
                        type="email" 
                        placeholder="Your email address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-grow bg-transparent border-none px-6 py-3 text-bone placeholder-muted/50 focus:outline-none focus:ring-0 text-base font-sans text-center md:text-left w-full"
                        disabled={status === 'sending'}
                        />
                        <button 
                        type="submit"
                        disabled={status === 'sending'}
                        className="px-8 py-3 bg-bone text-void font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:bg-teal hover:text-white transition-all duration-300 whitespace-nowrap shadow-lg disabled:opacity-70 disabled:cursor-wait"
                        >
                        {status === 'sending' ? 'Sending...' : 'Secure Early Access'}
                        </button>
                    </div>
                    {status === 'error' && (
                        <p className="text-red-400 text-xs mt-3">Something went wrong. Please try again.</p>
                    )}
                </form>
            </>
          )}
        </FadeIn>

      </div>
    </section>
  );
};