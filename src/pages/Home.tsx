import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Wrench, Package, ArrowRight } from 'lucide-react';
import WordFlipper from '../components/WordFlipper';

const Home: React.FC = () => {
  const flipWords = [
    "iPhone", "iPad", "Android Phones", "Samsung Galaxy",
    "MacBook", "Windows Laptops", "Tablets", "Apple Watch",
    "Game Consoles", "Batteries", "Screens", "Charging Ports",
    "Cameras", "Speakers", "Data Recovery"
  ];

  // Mouse tilt interaction for phone animation
  React.useEffect(() => {
    const art = document.querySelector('.hero-art');
    const svg = document.querySelector('.hero-art .phone-svg');
    if (!art || !svg) return;

    let rafId: number | null = null;
    let tx = 0, ty = 0; // target rotations
    let cx = 0, cy = 0; // current rotations
    const MAX = 6;      // degrees at extremes

    // respects reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function onMove(e: MouseEvent) {
      if (prefersReduced) return;
      const rect = (art as HTMLElement).getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;   // 0..1
      const y = (e.clientY - rect.top) / rect.height;   // 0..1
      tx = (x - 0.5) * MAX;    // -MAX..MAX
      ty = (0.5 - y) * MAX;
      if (!rafId) rafId = requestAnimationFrame(render);
    }

    function onLeave() {
      tx = 0; ty = 0;
      if (!rafId) rafId = requestAnimationFrame(render);
    }

    function render() {
      // ease current toward target
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      (svg as HTMLElement).style.transform = `translateY(0) rotateX(${cy}deg) rotateY(${cx}deg)`;
      if (Math.abs(tx - cx) > 0.01 || Math.abs(ty - cy) > 0.01) {
        rafId = requestAnimationFrame(render);
      } else {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    art.addEventListener('mousemove', onMove);
    art.addEventListener('mouseleave', onLeave);

    return () => {
      art.removeEventListener('mousemove', onMove);
      art.removeEventListener('mouseleave', onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
  const quickLinks = [
    {
      title: 'Explore Repairs & Accessories',
      description: 'Screen repairs, battery replacement, water damage recovery, and premium accessories',
      link: '/repairs-accessories',
      icon: <Wrench className="w-8 h-8" />
    },
    {
      title: 'Find a Location Near You',
      description: 'Search by ZIP code to find store hours, directions, and contact information',
      link: '/locations',
      icon: <Package className="w-8 h-8" />
    },
    {
      title: 'Chat with Support',
      description: 'Get instant help from our AI assistant or connect with a human technician',
      link: '/support',
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: 'Read Reviews',
      description: 'See what our customers say about our fast, reliable repair services',
      link: '/reviews',
      icon: <ArrowRight className="w-8 h-8" />
    }
  ];

  const steps = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Submit Your Device Info',
      description: 'Via online form, phone, or drop-off at our location',
      link: '/contact'
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'We Diagnose & Repair',
      description: 'Fast turnaround with quality parts and expert technicians',
      link: '/repairs-accessories'
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: 'Pick Up / Delivery',
      description: 'Get your device back like new with our warranty',
      link: '/locations'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 style={{ 
              fontSize: 'clamp(40px, 8.5vw, 120px)', 
              lineHeight: '0.9', 
              letterSpacing: '-0.5px',
              color: '#0B0E12',
              marginBottom: 'clamp(14px, 2.5vh, 24px)',
              fontWeight: '900'
            }}>
              FIX YOUR <span className="gradient-text">PHONE.</span>
            </h1>
            
            <div className="flipper-row">
              <span className="flipper-label">We repair</span>
              <WordFlipper words={flipWords} interval={1500} />
            </div>
            
            <p className="sub" style={{
              fontSize: 'clamp(16px, 2.2vw, 20px)',
              color: '#2B2F36',
              maxWidth: '56ch',
              marginBottom: 'clamp(18px, 2.4vh, 24px)'
            }}>
              Walk in or book pickup — quality parts, fast turnaround.
            </p>

            <div className="cta-row" style={{
              display: 'flex',
              gap: 'clamp(12px, 2vw, 18px)',
              flexWrap: 'wrap'
            }}>
              <Link
                to="/contact"
                className="btn-primary"
                style={{ textDecoration: 'none', fontWeight: '700' }}
              >
                GET A QUOTE / BOOK REPAIR
              </Link>
              
              <Link
                to="/repairs-accessories"
                className="btn-outline"
                style={{ textDecoration: 'none', fontWeight: '700' }}
              >
                VIEW PRICING
              </Link>
              
              <Link
                to="/support"
                className="btn-ghost"
                style={{ textDecoration: 'none', fontWeight: '600' }}
              >
                CHAT WITH SUPPORT
              </Link>
            </div>
          </div>

          {/* Animation slot */}
          <div className="hero-art" aria-hidden="true">
            <svg className="phone-svg" viewBox="0 0 260 520" role="img" aria-label="Broken phone illustration" focusable="false">
              <defs>
                <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7B5BFF"/>
                  <stop offset="55%" stopColor="#FF4FA8"/>
                  <stop offset="100%" stopColor="#FF7EC2"/>
                </linearGradient>
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="rgba(255,255,255,.55)"/>
                  <stop offset=".5" stopColor="rgba(255,255,255,.12)"/>
                  <stop offset="1" stopColor="rgba(255,255,255,0)"/>
                </linearGradient>
              </defs>

              {/* outer rounded body */}
              <rect x="10" y="10" width="240" height="500" rx="36" fill="#0F1115" stroke="url(#bodyGrad)" strokeWidth="2.5" filter="url(#softGlow)"/>

              {/* screen */}
              <rect x="22" y="60" width="216" height="428" rx="22" fill="#0A0C10" stroke="rgba(255,255,255,.06)" strokeWidth="1"/>
              {/* glass glare */}
              <path d="M22,120 L238,60 L238,140 L22,200 Z" fill="url(#glassGrad)" opacity=".25"/>

              {/* crack lines */}
              <g stroke="#FF7EC2" strokeWidth="1.4" strokeLinecap="round" opacity=".95" className="cracks">
                <path d="M60 110 L120 220"/>
                <path d="M120 220 L180 170"/>
                <path d="M120 220 L150 300"/>
                <path d="M90 260 L150 300"/>
                <path d="M150 300 L190 360"/>
              </g>

              {/* shards */}
              <g className="shards" fill="#FF4FA8" opacity=".9">
                <polygon points="150,310 165,300 160,320"/>
                <polygon points="95,250 105,245 102,260"/>
                <polygon points="175,190 185,185 182,200"/>
              </g>

              {/* camera notch */}
              <circle cx="130" cy="40" r="5" fill="#20232B"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section id="everything-you-need" className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,32px)]">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 uppercase tracking-wider underline-accent" style={{ color: '#0B0E12' }}>
            Everything You Need
          </h2>
          
          <div className="section-divider mb-16"></div>

          <div className="feature-grid">
            {quickLinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="feature-card group"
                style={{ textDecoration: 'none' }}
              >
                <div className="icon mb-6 inline-flex transition-colors duration-300">
                  {item.icon}
                </div>
                
                <h3 className="font-bold mb-4">
                  {item.title}
                </h3>
                
                <p className="leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <div className="learn mt-4 font-medium uppercase tracking-wide text-sm transition-colors duration-300">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,32px)]">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 uppercase tracking-wider underline-accent" style={{ color: '#0B0E12' }}>
            How It Works in 3 Steps
          </h2>
          
          <div className="section-divider mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Link
                key={index}
                to={step.link}
                className="group text-center p-8 bg-white border rounded-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(13,15,20,.10)',
                  boxShadow: '0 8px 30px rgba(13,15,20,.06)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(13,15,20,.12)';
                  e.currentTarget.style.borderColor = 'var(--pink-stroke)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(13,15,20,.06)';
                  e.currentTarget.style.borderColor = 'rgba(13,15,20,.10)';
                }}
              >
                <div className="icon--accent inline-flex justify-center mb-6 transition-colors duration-300">
                  {step.icon}
                </div>
                
                <div className="chip--pink inline-block text-sm font-bold mb-4 uppercase tracking-wide">
                  Step {index + 1}
                </div>
                
                <h3 className="text-xl font-bold mb-4" style={{ color: '#0B0E12' }}>
                  {step.title}
                </h3>
                
                <p className="leading-relaxed mb-6" style={{ color: '#2B2F36' }}>
                  {step.description}
                </p>
                
                <div className="learn font-medium uppercase tracking-wide text-sm transition-colors duration-300">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;