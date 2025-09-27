import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden" style={{ minHeight: '82vh', paddingTop: '8vh', paddingBottom: '8vh' }}>
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-purple-900/10"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-[clamp(16px,4vw,32px)]">
        <div className="max-w-4xl">
          <h1 className="font-black text-white mb-6" style={{ 
            fontSize: 'clamp(44px, 9vw, 144px)', 
            lineHeight: '0.9', 
            letterSpacing: '-0.5px' 
          }}>
            FIX YOUR PHONE.<br />
            <span className="text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text">
              FAST.
            </span><br />
            <span className="text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text">
              RELIABLY.
            </span>
          </h1>
          
          <p className="text-white/90 mb-8 max-w-[56ch]" style={{ 
            fontSize: 'clamp(16px, 2.4vw, 20px)' 
          }}>
            We repair any device, any brand — walk in or order pickup.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 rounded-full bg-transparent border border-blue-400/60 text-white font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 hover:border-blue-400 hover:-translate-y-0.5"
              style={{ 
                boxShadow: '0 0 20px rgba(94, 129, 255, 0.15)',
                filter: 'drop-shadow(0 0 8px rgba(94, 129, 255, 0.2))'
              }}
            >
              GET A QUOTE / BOOK REPAIR
            </button>
            
            <button
              onClick={scrollToPricing}
              className="px-8 py-4 rounded-full border border-white/20 text-white font-bold uppercase tracking-wide hover:border-pink-400/60 hover:text-pink-400 transition-all duration-300 hover:-translate-y-0.5"
            >
              VIEW PRICING
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: clamp(36px, 10vw, 64px) !important;
          }
          .flex-col.sm\\:flex-row {
            flex-direction: column;
            gap: 12px;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;