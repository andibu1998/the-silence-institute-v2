import React from 'react';
import { FadeIn } from './FadeIn';

interface BentoCardProps {
  number: string;
  title: string;
  text: string;
  className?: string;
  delay?: number;
}

const BentoCard: React.FC<BentoCardProps> = ({ number, title, text, className = "", delay = 0 }) => (
  <FadeIn delay={delay} className={`h-full ${className}`}>
    <div className="group relative h-full min-h-[300px] p-10 md:p-14 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-teal/30 hover:bg-white/[0.05] transition-all duration-700 overflow-hidden flex flex-col justify-end">
      
      {/* Big Background Number */}
      <span className="absolute -top-10 -right-6 font-serif text-[8rem] md:text-[10rem] text-white/[0.02] group-hover:text-teal/[0.05] transition-colors duration-700 leading-none select-none pointer-events-none z-0">
        {number}
      </span>

      {/* Content */}
      <div className="relative z-10">
          <h3 className="font-serif text-2xl md:text-3xl text-[#F8FAFC] mb-6 transition-colors duration-300">
            {title}
          </h3>
          <p className="font-sans text-[#CBD5E1] text-lg leading-relaxed font-light transition-colors duration-500">
            {text}
          </p>
      </div>
    </div>
  </FadeIn>
);

export const PhilosophySection: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 px-6 bg-[#03080c]">
      <div className="relative z-10 container mx-auto max-w-7xl">
        
        {/* Section Header - Centered */}
        <FadeIn className="mb-24 md:mb-32 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-bone mb-8 leading-[1.1]">
            Our Approach: <br/> <span className="text-teal opacity-90">The Neuro-Somatic Reset</span>
          </h2>
          <p className="font-sans text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            We don't believe in "coping." We believe in recalibration.
          </p>
        </FadeIn>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 auto-rows-fr">
          
          <BentoCard 
            className="lg:col-span-7"
            number="01"
            title="Truth #1: Tinnitus Is a Software Problem" 
            text="Your brain's noise-canceling filter is stuck. We teach it to turn back on." 
            delay={0}
          />

          <BentoCard 
            className="lg:col-span-5"
            number="02"
            title="Truth #2: Physical Tension Modulates Volume" 
            text="Jaw clenching and neck strain send signals directly into your auditory center. We release the triggers." 
            delay={100}
          />

          <BentoCard 
            className="lg:col-span-5"
            number="03"
            title="Truth #3: The Brain Can't Ignore a Threat" 
            text="As long as the sound is labeled 'dangerous,' the filter stays off. We remove the label." 
            delay={200}
          />

           <BentoCard 
            className="lg:col-span-7"
            number="04"
            title="Truth #4: Stress Amplifies the Signal" 
            text="Fight-or-flight mode makes neurons fire faster. We activate your body's natural calm switch." 
            delay={300}
          />

          <BentoCard 
            className="lg:col-span-12"
            number="05"
            title="Truth #5: Precision Medicine" 
            text="One Size Fits All Doesn't Work. Somatic tinnitus ≠ Stress-induced tinnitus. We customize the protocol to your subtype." 
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};