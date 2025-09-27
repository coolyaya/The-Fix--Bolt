import React from 'react';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      device: 'iPhone Repairs',
      price: '$79',
      popular: true,
      features: ['Screen replacement', 'Battery service', '90-day warranty', 'Same-day repair', 'Premium parts only']
    },
    {
      device: 'Samsung Repairs',
      price: '$69',
      popular: false,
      features: ['Screen replacement', 'Battery service', '90-day warranty', 'Same-day repair', 'OEM quality parts']
    },
    {
      device: 'Other Devices',
      price: 'Quote',
      popular: false,
      features: ['All major brands', 'Custom diagnostics', 'Competitive pricing', 'Expert service', 'Quality guarantee']
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-16 uppercase tracking-wider">
          Pricing & Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-black/70 backdrop-blur-sm border rounded-lg transition-all duration-300 hover:shadow-2xl ${
                plan.popular
                  ? 'border-pink-500 shadow-pink-500/20 transform scale-105'
                  : 'border-gray-800 hover:border-pink-500 hover:shadow-pink-500/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                    Best Value
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-pink-500/10 via-green-500/10 to-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide text-center">
                  {plan.device}
                </h3>
                
                <div className="text-center mb-6">
                  <span className="text-4xl font-black text-transparent bg-gradient-to-r from-blue-400 via-pink-400 to-green-400 bg-clip-text">
                    {plan.price.startsWith('$') ? plan.price : 'Contact'}
                  </span>
                  {plan.price.startsWith('$') && (
                    <span className="text-gray-400 text-sm block">Starting at</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 text-white font-bold uppercase tracking-wide rounded-lg transition-all duration-300 hover:shadow-lg ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-500 hover:to-blue-500'
                    : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500'
                }`}>
                  {plan.price === 'Quote' ? 'Get Quote' : 'Book Repair'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            *Prices subject to diagnostics and device model
          </p>
          <button className="px-8 py-4 bg-black border-2 border-gray-700 text-white font-bold uppercase tracking-wide rounded-full hover:border-pink-500 hover:text-pink-400 transition-all duration-300">
            See Full Price List
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;