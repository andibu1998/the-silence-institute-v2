import React, { useEffect, useRef } from 'react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      
      // Create Gradient: Anxious Blue -> Calm Teal -> Restored Gold
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, '#3B82F6'); // Anxious Blue
      gradient.addColorStop(0.4, '#2DD4BF'); // Healing Teal
      gradient.addColorStop(1, '#D4B483'); // Restored Gold

      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';

      // Draw the wave
      // Left side: Chaos (High freq, Noise) -> Right side: Flow (Low freq, Smooth)
      for (let x = 0; x < width; x += 2) {
        const progress = x / width; // 0.0 to 1.0
        const chaosFactor = Math.max(0, 1 - progress * 1.5); // 1.0 at left, 0.0 at 66%

        // 1. The "Signal" (Tinnitus Noise) - High frequency, fading out
        const noise = (Math.random() - 0.5) * 30 * chaosFactor;
        const jaggedSine = Math.sin(x * 0.1 + time * 8) * 20 * chaosFactor;

        // 2. The "Restoration" (Breathing) - Low frequency, constant
        const flowSine = Math.sin(x * 0.003 + time * 0.5) * 60;
        
        // 3. The "Pulse" - Medium frequency
        const pulseSine = Math.sin(x * 0.01 + time) * 20 * (0.5 + progress * 0.5);

        const y = height / 2 + noise + jaggedSine + flowSine + pulseSine;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      
      ctx.stroke();

      // Draw a subtle glow under the line
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'rgba(45, 212, 191, 0.3)';
      
      time += 0.015;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-void overflow-hidden hero-section">
      {/* Background Wave Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
      />

      {/* 
        Container
        - Mobile: pt-40 to clear fixed nav
        - Desktop: Centered vertically
      */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-start pt-40 pb-20 md:justify-center md:pt-0 md:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
            
            {/* Left Column: Headline */}
            <FadeIn delay={200} className="text-left w-full">
                <span className="font-sans text-teal/80 text-xs tracking-[0.2em] uppercase font-bold mb-6 block">
                    THE NEURO-SOMATIC TINNITUS SOLUTION
                </span>
                <h1 className="font-serif leading-[1.1] tracking-tight"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)' }}>
                    <span className="text-muted block mb-2 font-normal">Silence Isn't Gone.</span>
                    <span className="text-bone drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] font-normal">
                        It's Just Waiting to Be Restored.
                    </span>
                </h1>
            </FadeIn>

            {/* Right Column: Subtext & CTA */}
            <FadeIn delay={400} className="flex flex-col items-start space-y-10 lg:pt-12">
                 <div className="font-sans text-lg md:text-xl text-[#94A3B8] leading-relaxed font-light text-left space-y-6">
                    <p>
                        For decades, millions have been told: "There's no cure. You'll have to learn to live with it."
                    </p>
                    <p>
                        But what if the ringing isn't coming from broken ears? What if relief isn't about masking the sound... But rebooting the system that's generating it?
                    </p>
                    <p className="text-bone font-medium">
                        The Silence Institute is building the future of tinnitus relief.
                    </p>
                </div>

                <a href="#trust-bar" className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-white/20 hover:border-teal/50 transition-all duration-500 inline-block">
                  <div className="absolute inset-0 bg-teal/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  <span className="relative z-10 font-sans tracking-widest uppercase text-xs font-bold text-bone group-hover:text-teal transition-colors">
                    Discover Our Approach ↓
                  </span>
                </a>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};