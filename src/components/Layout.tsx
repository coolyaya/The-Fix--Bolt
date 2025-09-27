import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import ASCIIBackground from './ASCIIBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <ASCIIBackground />
      <div className="relative z-10">
        <TopBar />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;