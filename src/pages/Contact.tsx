import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Shield, Clock, Award } from 'lucide-react';

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    device: '',
    issue: '',
    zipCode: '',
    contactMethod: 'phone',
    preferredTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Pre-fill form based on URL parameters
    const service = searchParams.get('service');
    const topic = searchParams.get('topic');
    
    if (service) {
      setFormData(prev => ({
        ...prev,
        issue: `Interested in ${service}`
      }));
    } else if (topic) {
      setFormData(prev => ({
        ...prev,
        issue: `Question about ${topic}`
      }));
    }
  }, [searchParams]);

  const deviceOptions = [
    'iPhone 15 Series',
    'iPhone 14 Series',
    'iPhone 13 Series',
    'iPhone 12 Series',
    'iPhone 11 Series',
    'Samsung Galaxy S24',
    'Samsung Galaxy S23',
    'Samsung Galaxy S22',
    'Google Pixel 8',
    'Google Pixel 7',
    'Other Android',
    'iPad',
    'Other Tablet'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        device: '',
        issue: '',
        zipCode: '',
        contactMethod: 'phone',
        preferredTime: ''
      });
    }, 3000);
  };

  const topServices = [
    { name: 'Screen Repair', price: 'From $79' },
    { name: 'Battery Replacement', price: 'From $59' },
    { name: 'Water Damage Recovery', price: 'From $99' },
    { name: 'Charging Port Repair', price: 'From $69' }
  ];

  if (isSubmitted) {
    return (
      <>
        <PageHero 
          title="Thank You!"
          subtitle="Your request has been submitted successfully."
        />
        
        <section className="py-20 relative">
          <div className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,32px)]">
            <div className="max-w-2xl mx-auto text-center">
              <div className="feature-block border-green-500">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  We've Received Your Request
                </h3>
                
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--muted)' }}>
                  We usually reply within 15 minutes during business hours (Mon-Fri: 9AM-7PM). 
                  You'll hear from us soon with a quote and next steps.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="p-4">
                    <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="font-bold text-sm" style={{ color: 'var(--text)' }}>Quick Response</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>Usually within 15 min</p>
                  </div>
                  <div className="p-4">
                    <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="font-bold text-sm" style={{ color: 'var(--text)' }}>90-Day Warranty</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>On all repairs</p>
                  </div>
                  <div className="p-4">
                    <Award className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                    <p className="font-bold text-sm" style={{ color: 'var(--text)' }}>Quality Parts</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>Premium components</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero 
        title="Get a Quote"
        subtitle="Tell us what's wrong and we'll respond quickly."
      />

      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,32px)]">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="support-card transition-all duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-bold mb-2 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--text)' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--text)' }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="device" className="block font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--text)' }}>
                        Device Model *
                      </label>
                      <select
                        id="device"
                        name="device"
                        value={formData.device}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
                      >
                        <option value="">Select your device</option>
                        {deviceOptions.map((device) => (
                          <option key={device} value={device}>{device}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="issue" className="block font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--text)' }}>
                      Issue Description *
                    </label>
                    <textarea
                      id="issue"
                      name="issue"
                      value={formData.issue}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300 resize-vertical"
                      placeholder="Describe the problem with your device..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="zipCode" className="block font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--text)' }}>
                        ZIP Code / Address *
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
                        placeholder="32904 or full address"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--text)' }}>
                        Preferred Time
                      </label>
                      <input
                        type="text"
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
                        placeholder="e.g., Tomorrow afternoon"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--text)' }}>
                      Preferred Contact Method *
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="phone"
                          checked={formData.contactMethod === 'phone'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span style={{ color: 'var(--text)' }}>Phone</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={formData.contactMethod === 'email'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span style={{ color: 'var(--text)' }}>Email</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="text"
                          checked={formData.contactMethod === 'text'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span style={{ color: 'var(--text)' }}>Text</span>
                      </label>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn-primary font-black text-lg uppercase tracking-wide px-12 py-4"
                    >
                      Submit & Get Quote
                    </button>
                    
                    <p className="text-sm mt-4" style={{ color: 'var(--muted)' }}>
                      We usually reply within 15 minutes during business hours
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Trust Badges */}
              <div className="info-card transition-all duration-300">
                <h3 className="font-bold mb-4 uppercase tracking-wide">
                  Why Choose TheFix?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="icon mr-3">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">90-Day Warranty</p>
                      <p className="text-sm opacity-75">On all repairs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="icon mr-3">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">Fast Service</p>
                      <p className="text-sm opacity-75">Most repairs in 30-60 min</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="icon mr-3">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">Quality Parts</p>
                      <p className="text-sm opacity-75">Premium components only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Services */}
              <div className="info-card transition-all duration-300">
                <h3 className="font-bold mb-4 uppercase tracking-wide">
                  Popular Services
                </h3>
                
                <div className="space-y-3">
                  {topServices.map((service, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span>{service.name}</span>
                      <span className="font-bold" style={{ color: '#22C55E' }}>{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;