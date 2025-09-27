import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const NotFound: React.FC = () => {
  return (
    <>
      <PageHero 
        title="404 - Page Not Found"
        subtitle="The page you're looking for doesn't exist."
      >
        <div className="mt-8">
          <Link
            to="/"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 via-pink-600 to-purple-600 text-white font-bold uppercase tracking-wide rounded-full hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105"
          >
            Return Home
          </Link>
        </div>
      </PageHero>
    </>
  );
};

export default NotFound;