import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, children }) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,32px)]">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="page-title text-center uppercase tracking-wider">
            {title}
          </h1>
          {subtitle && (
            <p className="page-subtitle text-center leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;