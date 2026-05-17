import React, { useState, useEffect } from 'react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-6 py-6 md:px-12 flex justify-between items-center
      ${scrolled ? 'bg-void/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}
    >
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="w-2.5 h-2.5 rounded-full bg-teal shadow-[0_0_15px_rgba(45,212,191,0.6)] group-hover:scale-125 transition-transform duration-500"></div>
        <span className="font-serif text-xl tracking-wide text-bone">The Silence Institute</span>
      </div>

      <a 
        href="#practitioners" 
        className="relative group overflow-hidden px-6 py-2.5 rounded-full border border-white/10 hover:border-gold/40 transition-colors duration-500"
      >
        <span className="relative z-10 text-sm font-sans tracking-wide text-muted group-hover:text-gold transition-colors duration-300">
          For Practitioners
        </span>
        <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </a>
    </nav>
  );
};