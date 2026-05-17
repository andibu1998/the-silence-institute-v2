import React from 'react';
import { FadeIn } from './FadeIn';

// --- Organic Line Icons ---

const EarIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-bone group-hover:text-teal transition-colors duration-500">
    <path d="M7 21C7 21 4 18 4 12C4 6 9 2 14 2C19 2 21 6 21 9C21 11.5 19 13 19 13" />
    <path d="M16 16C16 16 15 18 13 18C11 18 10 16 10 12" />
  </svg>
);

const WaveIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-bone group-hover:text-teal transition-colors duration-500">
    <path d="M2 12H5L8 5L12 19L15 12H22" />
  </svg>
);

const FlagIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-bone group-hover:text-teal transition-colors duration-500">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

const ProblemCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
    <div className="relative group h-full p-10 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center hover:bg-white/[0.04] transition-colors duration-700 hover:border-teal/20">
        <div className="mb-6 p-5 rounded-full bg-white/[0.03] border border-white/10 group-hover:border-teal/30 transition-all duration-500 shadow-lg">
            {icon}
        </div>
        <h3 className="font-serif text-2xl text-[#F8FAFC] mb-4 font-normal">{title}</h3>
        <p className="font-sans text-[#CBD5E1] text-lg leading-relaxed font-light">{text}</p>
    </div>
);

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="relative py-32 px-6 scroll-mt-24">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <FadeIn className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-bone mb-6">Why Most Treatments Fail</h2>
        </FadeIn>

        {/* The Failures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <FadeIn delay={0} className="h-full">
            <ProblemCard 
              icon={<EarIcon />}
              title="Doctors treat the ears."
              text="But tinnitus isn't an ear problem."
            />
          </FadeIn>
          <FadeIn delay={150} className="h-full">
            <ProblemCard 
              icon={<WaveIcon />}
              title="Apps mask the sound."
              text="But masking prevents healing."
            />
          </FadeIn>
          <FadeIn delay={300} className="h-full">
            <ProblemCard 
              icon={<FlagIcon />}
              title="'Learn to live with it.'"
              text="But that's not a solution. It's surrender."
            />
          </FadeIn>
        </div>

        {/* The Truth Box - The Solution */}
        <FadeIn delay={500}>
            <div className="relative max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#0d141c] to-void border border-teal/20 shadow-[0_0_50px_rgba(45,212,191,0.1)] overflow-hidden">
                {/* Subtle sheen animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full animate-[shimmer_8s_infinite]"></div>
                
                <div className="relative z-10 p-10 md:p-14 text-center">
                    <h3 className="font-serif text-2xl md:text-3xl text-bone mb-6">
                        The Truth? Tinnitus is a <span className="text-teal font-medium">brain problem</span>.
                    </h3>
                    <p className="font-sans text-[#94A3B8] text-lg mb-8">
                        Specifically, three malfunctioning systems:
                    </p>
                    
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 font-sans text-gold text-lg tracking-wide">
                        <span className="font-medium">The Auditory System</span>
                        <span className="hidden md:inline text-white/20">•</span>
                        <span className="font-medium">The Somatosensory System</span>
                        <span className="hidden md:inline text-white/20">•</span>
                        <span className="font-medium">The Limbic System</span>
                    </div>
                </div>
                
                {/* Bottom Glow Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-50"></div>
            </div>
            <style>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    20% { transform: translateX(100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </FadeIn>

      </div>
    </section>
  );
};