import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Award, Shield, Clock, Users, Star, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Speed',
      description: 'Fast turnaround times without compromising quality'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust',
      description: 'Transparent pricing and honest diagnostics'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality',
      description: 'Premium parts and certified repair techniques'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Service',
      description: 'Exceptional customer experience every time'
    }
  ];

  const stats = [
    { number: '20,000+', label: 'Devices Repaired' },
    { number: '4.9★', label: 'Average Rating' },
    { number: '90 Day', label: 'Warranty' },
    { number: 'Same Day', label: 'Service Available' }
  ];

  const certifications = [
    'Apple Authorized Service Provider',
    'Samsung Certified Repair Center',
    'IPC Certified Technicians',
    'ISO 9001 Quality Management'
  ];

  return (
    <>
      <PageHero 
        title="About TheFix"
        subtitle="Quality parts, expert technicians, warranty-backed repairs."
      />

      {/* Mission & Values */}
      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,32px)]">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-wide">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Founded in 2018, TheFix began with a simple mission: to deliver quality, trust, and fast repairs 
              to our community. What started as a small repair shop has grown into the most trusted phone 
              repair service in the area, serving thousands of satisfied customers.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              We believe in honesty, transparency, and speed. Every device that comes through our doors 
              receives the same level of care and attention, whether it's a simple screen replacement or 
              complex logic board repair.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="feature-block group text-center transition-all duration-300"
              >
                <div className="icon flex justify-center mb-4 transition-colors duration-300">
                  {value.icon}
                </div>
                
                <h3 className="font-bold mb-3 uppercase tracking-wide">
                  {value.title}
                </h3>
                
                <p className="text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl font-black text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="feature-block text-center mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 uppercase tracking-wide">
              Credentials & Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-pink-500 transition-colors duration-300"
                >
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <p className="font-medium text-sm">{cert}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                All repairs come with our comprehensive 90-day warranty and satisfaction guarantee
              </p>
            </div>
          </div>

          {/* CTA Row */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary font-bold uppercase tracking-wide"
                style={{ textDecoration: 'none' }}
              >
                Get a Quote
              </Link>
              <Link
                to="/repairs-accessories"
                className="btn-outline font-bold uppercase tracking-wide"
                style={{ textDecoration: 'none' }}
              >
                View Repairs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;