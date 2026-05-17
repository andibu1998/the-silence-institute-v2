import React from 'react';
import { FadeIn } from './FadeIn';

const GoldCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold flex-shrink-0 mt-1">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PractitionersSection: React.FC = () => {
  return (
    <section id="practitioners" className="relative py-32 md:py-40 px-6 bg-[#040506] border-t border-white/5 overflow-hidden">
      {/* Atmospheric Gold Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[50vw] h-[50vw] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[40vw] h-[40vw] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
            {/* Left Column: The Hook */}
            <FadeIn>
                <div className="inline-block px-3 py-1 mb-8 border border-gold/30 rounded-full">
                    <span className="font-sans text-gold text-[10px] tracking-[0.2em] uppercase font-bold">For Founding Practitioners</span>
                </div>
                
                <h2 className="font-serif text-4xl md:text-5xl text-bone mb-8 leading-[1.1]">
                    Scale Your Impact. <br/>
                    <span className="text-gold opacity-90">Define the Future</span> of Tinnitus Treatment.
                </h2>
                
                <p className="font-sans text-lg text-muted/90 leading-relaxed mb-8 font-light">
                    You have the clinical results. We have the platform. 
                    <br/><br/>
                    We are assembling a <strong className="text-gold font-medium">Clinical Advisory Board</strong> of the world's leading experts to build the first comprehensive neuro-somatic protocol.
                </p>

                <div className="flex flex-col gap-4">
                    <p className="font-serif italic text-gold/80 text-xl">"The standard of care is broken. Help us build the new one."</p>
                </div>
            </FadeIn>

            {/* Right Column: The Deal (The Box) */}
            <FadeIn delay={200} className="w-full">
                <div className="relative group rounded-xl bg-[#080a0c] border border-gold/30 p-10 hover:border-gold/50 transition-colors duration-500 shadow-2xl">
                    <h3 className="font-serif text-2xl text-gold mb-8 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-gold/50"></span>
                        The Partnership Model
                    </h3>

                    <ul className="space-y-6 mb-10">
                        {[
                            { title: "High-Leverage Impact", desc: "Treat thousands of patients, not just 1:1." },
                            { title: "Zero Overhead", desc: "We handle marketing, tech, and operations." },
                            { title: "Asset Creation", desc: "Build the core curriculum once, earn continuously." },
                            { title: "Legacy", desc: "Help shift the global standard of care." }
                        ].map((item, idx) => (
                            <li key={idx} className="flex gap-4 items-start group/item">
                                <GoldCheck />
                                <div>
                                    <h4 className="font-sans text-bone font-medium text-base mb-1 group-hover/item:text-gold transition-colors">{item.title}</h4>
                                    <p className="font-sans text-muted text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <a 
                        href="https://api.leadconnectorhq.com/widget/booking/6dRCtOCSsFTrGE38glqp" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-4 bg-gold hover:bg-[#cbb086] text-[#0C0E10] font-sans font-bold uppercase tracking-widest text-xs rounded-lg transition-all duration-300 shadow-lg hover:shadow-gold/20 transform hover:-translate-y-0.5"
                    >
                        Apply for Clinical Board
                    </a>
                    <p className="text-center mt-4 text-[10px] text-muted uppercase tracking-widest">
                        Selection Process: Invitation Only
                    </p>
                </div>
            </FadeIn>
        </div>

        {/* Tag Cloud / Specialists - Refined Gold Style */}
        <FadeIn delay={400} className="border-t border-white/5 pt-20">
            <p className="text-center font-sans text-gold text-[10px] uppercase tracking-[0.2em] mb-10 opacity-80">
                ELIGIBLE SPECIALTIES:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                {["Functional Neurologists", "TMJ Specialists", "Osteopaths", "ANS Experts", "Somatic Therapists"].map((role) => (
                    <span key={role} className="px-6 py-3 rounded-full border border-gold/40 bg-transparent text-[0.8rem] font-sans uppercase tracking-[1px] text-[#E0E0E0] hover:bg-gold/10 hover:border-gold hover:text-gold transition-all duration-300 cursor-default backdrop-blur-sm">
                        {role}
                    </span>
                ))}
            </div>
        </FadeIn>

      </div>
    </section>
  );
};