import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Repairs & Accessories', href: '#repairs' },
    { label: 'Customer Support', href: '#support' },
    { label: 'About Us', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Locations', href: '#locations' }
  ];

  const legalLinks = [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Warranty Information', href: '#' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 px-6 relative" style={{ borderTop: '1px solid rgba(13,15,20,.10)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-black mb-6 uppercase tracking-wide" style={{ color: '#0B0E12' }}>
              Contact Info
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" style={{ color: '#FF5CA8' }} />
                <div>
                  <p className="font-medium" style={{ color: '#0B0E12' }}>(321) 555-0123</p>
                  <p className="text-sm" style={{ color: 'rgba(13,15,20,.72)' }}>Main Line</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" style={{ color: '#5AA0FF' }} />
                <div>
                  <p className="font-medium" style={{ color: '#0B0E12' }}>info@thefix.com</p>
                  <p className="text-sm" style={{ color: 'rgba(13,15,20,.72)' }}>General Inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1" style={{ color: '#7E5BFF' }} />
                <div>
                  <p className="font-medium" style={{ color: '#0B0E12' }}>123 Main Street</p>
                  <p className="text-sm" style={{ color: 'rgba(13,15,20,.72)' }}>West Melbourne, FL 32904</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-black mb-6 uppercase tracking-wide" style={{ color: '#0B0E12' }}>
              Quick Links
            </h3>
            
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block transition-colors duration-300 text-sm font-medium hover:underline"
                  style={{ color: 'rgba(13,15,20,.72)' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-black mb-6 uppercase tracking-wide" style={{ color: '#0B0E12' }}>
              Services
            </h3>
            
            <div className="space-y-3 text-sm">
              <p style={{ color: 'rgba(13,15,20,.72)' }}>Screen Repair</p>
              <p style={{ color: 'rgba(13,15,20,.72)' }}>Battery Replacement</p>
              <p style={{ color: 'rgba(13,15,20,.72)' }}>Water Damage Recovery</p>
              <p style={{ color: 'rgba(13,15,20,.72)' }}>Charging Port Repair</p>
              <p style={{ color: 'rgba(13,15,20,.72)' }}>Camera Repair</p>
              <p style={{ color: 'rgba(13,15,20,.72)' }}>Software Issues</p>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-2xl font-black mb-6 uppercase tracking-wide" style={{ color: '#0B0E12' }}>
              Follow Us
            </h3>
            
            <div className="flex space-x-4 mb-6">
              <a href="#" className="transition-colors duration-300" style={{ color: 'rgba(13,15,20,.72)' }}>
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="transition-colors duration-300" style={{ color: 'rgba(13,15,20,.72)' }}>
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="transition-colors duration-300" style={{ color: 'rgba(13,15,20,.72)' }}>
                <Twitter className="w-6 h-6" />
              </a>
            </div>

            <div className="space-y-3">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block transition-colors duration-300 text-sm font-medium hover:underline"
                  style={{ color: 'rgba(13,15,20,.72)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8" style={{ borderTop: '1px solid rgba(13,15,20,.10)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0" style={{ color: 'rgba(13,15,20,.72)' }}>
              <p className="uppercase tracking-wider font-mono text-sm">
                TheFix © 2025. All Rights Reserved.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-sm font-mono uppercase tracking-wider" style={{ color: 'rgba(13,15,20,.5)' }}>
                Professional Phone Repair Services • Fast • Reliable • Guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;