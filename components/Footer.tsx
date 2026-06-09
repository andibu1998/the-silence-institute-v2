import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-void">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        
        {/* Brand & Address */}
        <div className="flex flex-col gap-4">
          <div className="font-serif text-bone text-xl">
            The Silence Institute
          </div>
          <address className="font-sans text-muted not-italic flex flex-col gap-1">
            <span>Andreas Burkhardt</span>
            <span>Marienplatz 8</span>
            <span>86165 Augsburg, Germany</span>
          </address>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 h-full md:justify-center">
          <div className="font-sans text-bone">Contact</div>
          <div className="font-sans text-muted flex flex-col gap-2">
            <a href="mailto:info@mail.thesilenceinstitute.com" className="hover:text-teal transition-colors">
              info@mail.thesilenceinstitute.com
            </a>
            <a href="tel:+4915679725136" className="hover:text-teal transition-colors">
              +49 15679 725136
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col gap-4 h-full lg:justify-center lg:items-end">
          <div className="font-sans text-bone">Legal</div>
          <div className="font-sans text-muted flex flex-col gap-2 lg:items-end">
            <div className="text-[10px] text-muted/60 leading-relaxed max-w-sm lg:text-right mb-2">
              Disclaimer: The information provided by The Silence Institute is for educational and coaching purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </div>
            <a 
              href="https://go.thesilenceinstitute.com/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="https://go.thesilenceinstitute.com/terms-and-conditions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal transition-colors"
            >
              Terms of Service
            </a>
            <span className="mt-4 text-xs">
              &copy; {new Date().getFullYear()} The Silence Institute. All rights reserved.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
