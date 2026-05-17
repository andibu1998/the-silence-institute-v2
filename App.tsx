import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { PhilosophySection } from './components/PhilosophySection';
import { VisionSection } from './components/VisionSection';
import { PractitionersSection } from './components/PractitionersSection';
import { Footer } from './components/Footer';
import { NoiseOverlay } from './components/NoiseOverlay';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-void selection:bg-teal selection:text-void overflow-hidden">
      {/* Texture & Background Effects */}
      <NoiseOverlay />
      
      <div className="relative z-10 flex flex-col w-full">
        <Navigation />
        
        <main className="flex-grow flex flex-col w-full">
          {/* Hero Section */}
          <Hero />

          {/* Scientific Foundation Bar (Below the Fold) */}
          <TrustBar />

          {/* Main Content Sections */}
          <ProblemSection />
          <PhilosophySection />
          <VisionSection />
          <PractitionersSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;