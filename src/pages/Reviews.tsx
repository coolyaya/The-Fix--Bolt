import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Star, ExternalLink } from 'lucide-react';

const Reviews: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const featuredReviews = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Amazing service! They fixed my cracked iPhone screen in just 30 minutes. The quality is perfect and the price was very reasonable. Highly recommend TheFix!',
      date: '2 weeks ago'
    },
    {
      name: 'Mike R.',
      rating: 5,
      text: 'My phone was completely dead after water damage. TheFix brought it back to life! Excellent customer service and fast turnaround. They saved all my photos too.',
      date: '1 month ago'
    },
    {
      name: 'Jessica L.',
      rating: 5,
      text: 'Professional, friendly, and honest. They diagnosed my battery issue quickly and had me back up and running the same day. Great warranty too.',
      date: '3 weeks ago'
    },
    {
      name: 'David K.',
      rating: 5,
      text: 'Best phone repair shop in town! Fair pricing, quality work, and they stand behind their repairs with a solid warranty. Will definitely return.',
      date: '1 week ago'
    },
    {
      name: 'Amanda T.',
      rating: 5,
      text: 'Saved my phone and all my photos! The technician was knowledgeable and explained everything clearly. Fast service and reasonable prices.',
      date: '2 months ago'
    }
  ];

  const scrollingReviews = [
    'Fast and reliable service ⭐⭐⭐⭐⭐',
    'Fixed my phone perfectly ⭐⭐⭐⭐⭐',
    'Great customer service ⭐⭐⭐⭐⭐',
    'Honest pricing, quality work ⭐⭐⭐⭐⭐',
    'Saved my water damaged phone ⭐⭐⭐⭐⭐',
    'Professional technicians ⭐⭐⭐⭐⭐',
    'Same day repair available ⭐⭐⭐⭐⭐',
    'Warranty on all repairs ⭐⭐⭐⭐⭐'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % featuredReviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredReviews.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <>
      <PageHero 
        title="What Our Customers Say"
        subtitle="Real customers. Real results."
      />

      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,32px)]">
          {/* Stats */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              {renderStars(5)}
              <span className="text-white font-bold text-2xl ml-4">4.9/5</span>
            </div>
            <p className="chip--pink inline-block">Based on 500+ Google Reviews</p>
          </div>

          {/* Featured Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredReviews.slice(0, 3).map((review, index) => (
              <div
                key={index}
                className="feature-block group transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm ml-4" style={{ color: 'var(--muted)' }}>{review.date}</span>
                </div>
                
                <p className="mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                
                <p className="font-bold">
                  — {review.name}
                </p>
              </div>
            ))}
          </div>

          {/* Rotating Featured Review */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="feature-block text-center">
              <div className="flex justify-center mb-4">
                {renderStars(featuredReviews[currentReview].rating)}
              </div>
              
              <p className="text-xl mb-6 leading-relaxed" style={{ color: 'var(--muted)' }}>
                "{featuredReviews[currentReview].text}"
              </p>
              
              <p className="font-bold text-lg" style={{ color: 'var(--text)' }}>
                — {featuredReviews[currentReview].name}
              </p>
              
              <p className="text-sm mt-2" style={{ color: 'var(--muted)' }}>
                {featuredReviews[currentReview].date}
              </p>
            </div>

            {/* Review indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview ? 'bg-pink-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Scrolling Reviews */}
          <div className="relative overflow-hidden mb-12">
            <div className="flex animate-scroll space-x-8 whitespace-nowrap">
              {[...scrollingReviews, ...scrollingReviews].map((review, index) => (
                <span
                  key={index}
                  className="text-lg font-medium px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm"
                  style={{ color: 'var(--muted)' }}
                >
                  {review}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="btn-primary font-bold uppercase tracking-wide"
                style={{ textDecoration: 'none' }}
              >
                Get a Quote
              </Link>
              <a
                href="https://www.google.com/search?q=TheFix+West+Melbourne+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center font-bold uppercase tracking-wide"
                style={{ textDecoration: 'none' }}
              >
                View More on Google
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Reviews;