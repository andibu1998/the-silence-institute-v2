import React from 'react';
import { FadeIn } from './FadeIn';

export const TrustBar: React.FC = () => {
  const logos = [
    { name: 'Charité', url: 'https://storage.googleapis.com/msgsndr/WBcpbvnlBFrQ9DnHZPfH/media/6995cb0cad0053712d8736f1.webp' },
    { name: 'Harvard', url: 'https://storage.googleapis.com/msgsndr/WBcpbvnlBFrQ9DnHZPfH/media/6995cb0cfa6b7b91372883a8.webp' },
    { name: 'Oxford', url: 'https://storage.googleapis.com/msgsndr/WBcpbvnlBFrQ9DnHZPfH/media/6995cb0cfa6b7b0b642883a7.webp' },
    { name: 'Stanford', url: 'https://storage.googleapis.com/msgsndr/WBcpbvnlBFrQ9DnHZPfH/media/6995cb0cb3d5f859454a2521.webp' },
  ];

  return (
    <section id="trust-bar" className="relative py-16 md:py-20 bg-[#010406] border-b border-white/5">
       <FadeIn>
          <div className="container mx-auto px-6 flex flex-col items-center">
             <p className="font-sans text-[0.7rem] tracking-[0.2em] text-muted/60 uppercase text-center mb-10">
                Our methodology is rooted in clinical research from:
             </p>
             <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-20 w-full">
                {logos.map((logo) => (
                    <img 
                      key={logo.name}
                      src={logo.url} 
                      alt={`${logo.name} Research`}
                      className="h-[40px] md:h-[55px] w-auto object-contain transition-all duration-500"
                      style={{ filter: 'brightness(0) invert(1) opacity(0.8)' }}
                      onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0) invert(1) opacity(1)'}
                      onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(0) invert(1) opacity(0.8)'}
                    />
                ))}
             </div>
          </div>
       </FadeIn>
    </section>
  );
};