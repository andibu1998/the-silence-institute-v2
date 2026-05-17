import React from 'react';

export const NeuroOrb: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none overflow-visible">
      <style>{`
        @keyframes deep-breathe {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.15); opacity: 0.7; }
        }
        @keyframes slow-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      
      {/* Primary Glow (The Core) */}
      <div 
        className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[100px]"
        style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.25) 0%, rgba(2, 6, 9, 0) 60%)',
            animation: 'deep-breathe 8s ease-in-out infinite alternate',
            willChange: 'transform, opacity'
        }}
      />

      {/* Secondary Atmosphere (The Void) */}
      <div 
        className="absolute w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] rounded-full blur-[120px] mix-blend-screen"
        style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 100, 180, 0.1) 0%, rgba(2, 6, 9, 0) 70%)',
            animation: 'deep-breathe 12s ease-in-out infinite alternate-reverse',
            willChange: 'transform, opacity'
        }}
      />
      
      {/* Subtle Texture Rotation */}
      <div 
         className="absolute w-[100%] h-[100%] opacity-20"
         style={{
             background: 'conic-gradient(from 0deg, transparent 0%, rgba(0,212,255,0.05) 50%, transparent 100%)',
             animation: 'slow-spin 60s linear infinite'
         }}
      />
    </div>
  );
};