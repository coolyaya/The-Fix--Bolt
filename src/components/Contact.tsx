import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phoneModel: '',
    issue: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      phoneModel: '',
      issue: ''
    });
    alert('Thank you! We\'ll contact you soon.');
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-wider">
            Need a Repair?
          </h2>
          <p className="text-2xl text-gray-400 uppercase tracking-wide">
            We're Here.
          </p>
        </div>

        <div className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white font-bold mb-2 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-bold mb-2 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-white font-bold mb-2 uppercase tracking-wide">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="phoneModel" className="block text-white font-bold mb-2 uppercase tracking-wide">
                  Phone Model
                </label>
                <input
                  type="text"
                  id="phoneModel"
                  name="phoneModel"
                  value={formData.phoneModel}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  placeholder="iPhone 14, Galaxy S23, etc."
                />
              </div>
            </div>

            <div>
              <label htmlFor="issue" className="block text-white font-bold mb-2 uppercase tracking-wide">
                Issue Description
              </label>
              <textarea
                id="issue"
                name="issue"
                value={formData.issue}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-pink-500 focus:outline-none transition-colors duration-300 resize-vertical"
                placeholder="Describe the problem with your phone..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 via-pink-600 via-green-600 to-red-600 text-white font-bold uppercase tracking-wide rounded-full hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;