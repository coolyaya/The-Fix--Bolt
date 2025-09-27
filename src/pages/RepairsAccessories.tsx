import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Smartphone, Battery, Droplets, Zap, Camera, Volume2, Cpu, Shield, Phone, Cable, Power } from 'lucide-react';

const RepairsAccessories: React.FC = () => {
  const [activeTab, setActiveTab] = useState('repairs');
  const [selectedService, setSelectedService] = useState<any>(null);

  const repairs = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Screen Repair or Replacement',
      description: 'Cracked or damaged screens fixed with premium parts',
      price: 'From $79',
      time: '30-60 min',
      details: 'We use only premium quality screens that match your device\'s original specifications. Our technicians are trained to handle all major brands including iPhone, Samsung, Google Pixel, and more.'
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: 'Battery Replacement',
      description: 'Restore your phone\'s battery life with genuine batteries',
      price: 'From $59',
      time: '20-30 min',
      details: 'Replace your worn-out battery with a high-quality replacement. We test all batteries before installation and provide a 90-day warranty on all battery replacements.'
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Water Damage Recovery',
      description: 'Professional liquid damage repair and data recovery',
      price: 'From $99',
      time: '2-24 hours',
      details: 'Time is critical with water damage. Our specialized cleaning process and component-level repair can often save devices that seem beyond repair. Free diagnostic included.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Charging Port Repair',
      description: 'Fix charging issues and port damage',
      price: 'From $69',
      time: '45-90 min',
      details: 'Whether it\'s a loose connection, debris, or damaged port, we can restore your device\'s charging capability with precision micro-soldering techniques.'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Camera / Lens Repairs',
      description: 'Restore camera functionality and image quality',
      price: 'From $89',
      time: '60-120 min',
      details: 'Fix blurry photos, camera app crashes, or cracked camera lenses. We stock genuine camera modules for most popular devices.'
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: 'Speaker / Audio Issues',
      description: 'Fix sound problems and speaker replacements',
      price: 'From $79',
      time: '45-90 min',
      details: 'Restore clear audio with speaker replacements or audio IC repairs. We handle both earpiece and loudspeaker issues.'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Logic Board / Micro-soldering',
      description: 'Advanced motherboard repairs and data recovery',
      price: 'Quote',
      time: '1-3 days',
      details: 'Complex board-level repairs including IC replacement, trace repair, and data recovery. Our certified technicians use professional micro-soldering equipment.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Software / Virus / OS Issues',
      description: 'Software troubleshooting and system restoration',
      price: 'From $49',
      time: '30-60 min',
      details: 'Fix software glitches, remove malware, perform factory resets, and restore your device to optimal performance.'
    }
  ];

  const accessories = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Cases',
      description: 'Premium protective cases for all models',
      price: 'From $19',
      details: 'Wide selection of protective cases from basic protection to heavy-duty options. Compatible with all major phone models.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Screen Protectors',
      description: 'Tempered glass and film protectors',
      price: 'From $15',
      details: 'Professional installation of tempered glass and film screen protectors. Bubble-free application guaranteed.'
    },
    {
      icon: <Cable className="w-8 h-8" />,
      title: 'Chargers & Cables',
      description: 'Original and certified charging accessories',
      price: 'From $25',
      details: 'Genuine and MFi-certified charging cables, wall adapters, and car chargers for all device types.'
    },
    {
      icon: <Power className="w-8 h-8" />,
      title: 'Power Banks',
      description: 'Portable charging solutions',
      price: 'From $39',
      details: 'High-capacity portable chargers with fast charging support. Various sizes and capacities available.'
    }
  ];

  const currentItems = activeTab === 'repairs' ? repairs : accessories;

  return (
    <>
      <PageHero 
        title="Repairs & Accessories"
        subtitle="Screen, battery, water damage, ports, cameras, audio, micro-soldering, and more."
      />

      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,32px)]">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white border border-gray-200 rounded-full p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('repairs')}
                className={`px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-all duration-300 ${
                  activeTab === 'repairs'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Repairs
              </button>
              <button
                onClick={() => setActiveTab('accessories')}
                className={`px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-all duration-300 ${
                  activeTab === 'accessories'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Accessories
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="feature-block group cursor-pointer transition-all duration-300"
                onClick={() => setSelectedService(item)}
              >
                <div className="icon inline-flex mb-4 transition-colors duration-300">
                  {item.icon}
                </div>
                
                <h3 className="font-bold mb-2">
                  {item.title}
                </h3>
                
                <p className="mb-4">
                  {item.description}
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold" style={{ color: '#22C55E' }}>{item.price}</span>
                  {'time' in item && (
                    <span className="text-sm opacity-75">{item.time}</span>
                  )}
                </div>
                
                <a href="#" className="learn block text-center py-2 px-4 font-bold uppercase tracking-wide text-sm">
                  Learn More
                </a>
              </div>
            ))}
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
              <button className="btn-outline font-bold uppercase tracking-wide">
                See Full Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-pink-500 rounded-lg p-8 max-w-2xl w-full shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="text-pink-400 mr-4">
                {selectedService.icon}
              </div>
              <h3 className="text-2xl font-bold">{selectedService.title}</h3>
            </div>
            
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--muted)' }}>
              {selectedService.details}
            </p>
            
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-xl" style={{ color: '#22C55E' }}>{selectedService.price}</span>
              {'time' in selectedService && (
                <span style={{ color: 'var(--muted)' }}>Typical time: {selectedService.time}</span>
              )}
            </div>
            
            <div className="flex gap-4">
              <Link
                to={`/contact?service=${encodeURIComponent(selectedService.title)}`}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold uppercase tracking-wide rounded-lg hover:shadow-lg transition-all duration-300 text-center text-decoration-none"
              >
                Request Service
              </Link>
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-3 border border-gray-300 font-bold uppercase tracking-wide rounded-lg hover:border-pink-500 hover:text-pink-400 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RepairsAccessories;