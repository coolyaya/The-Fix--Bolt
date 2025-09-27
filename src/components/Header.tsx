import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/', className: '' },
    { label: 'About Us', path: '/about', className: '' },
    { 
      label: 'Repairs & Accessories', 
      path: '/repairs-accessories', 
      className: 'nav-long nav-repairs',
      dataFull: 'Repairs & Accessories',
      dataShort: 'Repairs + Accessories',
      dataMini: 'Repairs'
    },
    { label: 'Locations', path: '/locations', className: '' },
    { 
      label: 'Customer Support', 
      path: '/support', 
      className: 'nav-long nav-support',
      dataFull: 'Customer Support',
      dataShort: 'Support',
      dataMini: 'Support'
    },
    { label: 'Reviews', path: '/reviews', className: '' },
    { 
      label: 'Contact / Get a Quote', 
      path: '/contact', 
      className: 'nav-long nav-contact',
      dataFull: 'Contact / Get a Quote',
      dataShort: 'Contact / Quote',
      dataMini: 'Contact'
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  // Auto-fit logic for responsive label shortening
  useEffect(() => {
    const fitTabs = () => {
      const container = document.querySelector('.header-row') as HTMLElement;
      const list = document.querySelector('.nav-list') as HTMLElement;
      const logo = document.querySelector('.logo') as HTMLElement;
      
      if (!container || !list || !logo || window.innerWidth <= 768) return;

      const LONG = [
        { sel: '.nav-repairs', full: 'dataFull', short: 'dataShort', mini: 'dataMini' },
        { sel: '.nav-support', full: 'dataFull', short: 'dataShort', mini: 'dataMini' },
        { sel: '.nav-contact', full: 'dataFull', short: 'dataShort', mini: 'dataMini' },
      ];

      const setLabel = (el: HTMLElement | null, key: string) => {
        if (!el) return;
        const text = el.dataset[key];
        if (!text) return;
        el.textContent = text;
      };

      // Reset to full labels first
      LONG.forEach(({sel}) => {
        const el = document.querySelector(sel) as HTMLElement;
        setLabel(el, 'full');
      });
      
      // Reset gap to large
      list.style.gap = 'var(--gap-lg)';

      // Compute available width
      const safePad = 16;
      const available = container.clientWidth - (logo.offsetWidth + safePad);
      const needed = list.scrollWidth;

      if (needed > available) {
        // Step 1: reduce gap to md
        list.style.gap = 'var(--gap-md)';
      }
      
      if (list.scrollWidth > available) {
        // Step 2: apply short labels
        LONG.forEach(({sel}) => {
          const el = document.querySelector(sel) as HTMLElement;
          setLabel(el, 'short');
        });
      }
      
      if (list.scrollWidth > available) {
        // Step 3: apply mini on the longest two
        setLabel(document.querySelector('.nav-support') as HTMLElement, 'mini');
        setLabel(document.querySelector('.nav-contact') as HTMLElement, 'mini');
      }
    };

    // Run on mount and resize
    fitTabs();
    window.addEventListener('resize', fitTabs);
    
    return () => window.removeEventListener('resize', fitTabs);
  }, [location.pathname]);

  return (
    <>
      <header className="site-header">
        <div className="container header-row">
          <Link to="/" className="logo">
            TheFix
          </Link>
          
          <nav className="nav" aria-label="Primary">
            <button 
              className="hamburger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link 
                    to={item.path}
                    className={`nav-link ${item.className}`}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                    data-full={item.dataFull}
                    data-short={item.dataShort}
                    data-mini={item.dataMini}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <div className="container">
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`mobile-nav-link ${
                      isActive(item.path) ? 'active' : ''
                    }`}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <style jsx>{`
        .site-header {
          position: static;
          background: #fff;
          border-bottom: 1px solid rgba(13,15,20,.08);
        }

        .header-row {
          display: flex;
          align-items: center;
          min-height: var(--header-h);
          gap: clamp(20px, 3vw, 44px);
        }

        .logo {
          font-weight: 900;
          font-size: clamp(20px, 2.2vw, 24px);
          white-space: nowrap;
          margin-right: clamp(24px, 4vw, 56px);
          color: #0D0F14;
          text-decoration: none;
        }

        .logo:hover {
          color: #0B0E12;
        }

        .nav {
          margin-left: auto;
        }

        .nav-list {
          display: flex;
          align-items: center;
          justify-content: flex-start !important;
          flex-wrap: nowrap;
          gap: var(--gap-lg);
          list-style: none;
          margin: 0 !important;
          padding: 0;
        }

        .nav-item {
          flex: 0 0 auto;
          margin: 0 !important;
        }

        .nav-link {
          display: inline-block;
          white-space: nowrap;
          font-size: clamp(14px, 1.25vw, 16px);
          color: #0D0F14;
          opacity: 0.92;
          padding-block: 12px;
          text-decoration: none;
          letter-spacing: 0;
          transform: none;
          margin: 0 !important;
        }

        .nav-link:hover {
          opacity: 1;
        }

        .nav-link[aria-current="page"]::after {
          content: "";
          display: block;
          height: 2px;
          margin-top: 6px;
          border-radius: 2px;
          background: linear-gradient(90deg, #7B5BFF, #FF4FA8, #FF7EC2);
        }

        .hamburger {
          display: none;
        }

        @media (max-width: 1120px) {
          .nav-list {
            gap: var(--gap-md);
          }
          .nav-link {
            font-size: clamp(13px, 1.15vw, 15px);
          }
        }

        @media (max-width: 980px) {
          .nav-list {
            gap: var(--gap-sm);
          }
          .nav-link {
            font-size: 13px;
          }
        }

        @media (max-width: 768px) {
          .nav-list {
            display: none;
          }
          .hamburger {
            display: inline-flex;
            width: 44px;
            height: 44px;
            border: 1px solid rgba(13,15,20,.12);
            border-radius: 8px;
            align-items: center;
            justify-content: center;
            background: #fff;
            color: #0D0F14;
            cursor: pointer;
          }
        }

        .mobile-menu {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(13,15,20,0.08);
          padding-block: 16px;
        }

        .mobile-menu ul {
          display: grid;
          gap: 14px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-nav-link {
          display: block;
          padding: 14px 0;
          color: #0D0F14;
          text-decoration: none;
          font-size: 16px;
          opacity: 0.92;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          opacity: 1;
          color: #0B0E12;
        }
      `}</style>
    </>
  );
};

export default Header;