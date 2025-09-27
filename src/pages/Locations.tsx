import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { MapPin, Clock, Phone, Navigation, X } from 'lucide-react';

const Locations: React.FC = () => {
  const [searchZip, setSearchZip] = useState('');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const locations = [
    {
      id: 1,
      name: 'TheFix West Melbourne',
      address: '123 Main Street, West Melbourne, FL 32904',
      phone: '(321) 555-0123',
      hours: 'Mon-Fri: 9AM-7PM, Sat: 10AM-6PM, Sun: 12PM-5PM',
      coordinates: { lat: 28.0836, lng: -80.6081 }
    },
    {
      id: 2,
      name: 'TheFix Downtown',
      address: '456 Central Ave, Melbourne, FL 32901',
      phone: '(321) 555-0456',
      hours: 'Mon-Fri: 8AM-8PM, Sat: 9AM-7PM, Sun: 11AM-6PM',
      coordinates: { lat: 28.0836, lng: -80.6081 }
    },
    {
      id: 3,
      name: 'TheFix Beachside',
      address: '789 Ocean Drive, Satellite Beach, FL 32937',
      phone: '(321) 555-0789',
      hours: 'Mon-Fri: 10AM-6PM, Sat: 10AM-5PM, Sun: Closed',
      coordinates: { lat: 28.1761, lng: -80.5900 }
    }
  ];

  const images = [
    {
      src: '/images/The Fix 1.webp',
      caption: 'Team member ready to help at the accessories counter',
      category: 'Team'
    },
    {
      src: '/images/The Fix 2.webp',
      caption: 'Storefront entrance for The FIX Tech Repair',
      category: 'Storefront'
    },
    {
      src: '/images/The Fix 3.webp',
      caption: 'Technician installing a screen protector for a customer',
      category: 'Repairs'
    },
    {
      src: '/images/The Fix 4.webp',
      caption: 'Wall of phone cases and accessories inside the shop',
      category: 'Accessories'
    }
  ];

  const handleSearch = () => {
    console.log('Searching for locations near:', searchZip);
  };

  return (
    <>
      <PageHero 
        title="Find a TheFix Near You"
        subtitle="Search by address or ZIP to view hours and directions."
      />

      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,32px)]">
          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="flex gap-2">
              <input
                type="text"
                value={searchZip}
                onChange={(e) => setSearchZip(e.target.value)}
                placeholder="Enter ZIP code or address"
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
              />
              <button
                onClick={handleSearch}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Find
              </button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="feature-block text-center mb-12">
            <MapPin className="w-16 h-16 text-pink-400 mx-auto mb-4" />
            <p className="text-lg" style={{ color: 'var(--muted)' }}>
              Interactive map would be embedded here showing all TheFix locations
            </p>
            <p className="text-sm mt-2" style={{ color: 'var(--muted)' }}>
              (Google Maps integration would display store pins and directions)
            </p>
          </div>

          {/* Location List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {locations.map((location) => (
              <div
                key={location.id}
                className="info-card group transition-all duration-300"
              >
                <h3 className="font-bold mb-4 transition-colors duration-300">
                  {location.name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#FF4FA8' }} />
                    <p className="text-sm">{location.address}</p>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#FF4FA8' }} />
                    <p className="text-sm">{location.phone}</p>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#FF4FA8' }} />
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>{location.hours}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <a href="#" className="learn flex-1 py-2 px-4 text-center font-bold text-sm">
                    <Navigation className="w-4 h-4 inline mr-2" />
                    Directions
                  </a>
                  <a href="#" className="learn flex-1 py-2 px-4 text-center font-bold text-sm">
                    Call Store
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Photo Gallery */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white text-center mb-8 uppercase tracking-wide">
              Store Gallery
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white font-bold text-sm">{image.caption}</p>
                      <p className="text-pink-400 text-xs uppercase tracking-wide">{image.category}</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500 transition-colors duration-300 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Lightbox */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-full">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors duration-300 bg-black/50 rounded-full p-2"
                >
                  <X className="w-8 h-8" />
                </button>
                
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].caption}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 rounded-b-lg border-t">
                  <p className="text-white font-bold">{images[selectedImage].caption}</p>
                  <p className="text-pink-400 text-sm uppercase tracking-wide">{images[selectedImage].category}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Locations;

