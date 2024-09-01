import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-6xl font-extrabold mb-4 text-center">Welcome to FaceMed</h1>
      <p className="text-xl mb-8 text-center max-w-xl">
        Revolutionizing healthcare with AI-powered facial recognition and personalized medical services.
      </p>
      <Link 
        to="/login" 
        className="bg-white text-blue-500 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
      >
        Get Started
      </Link>
    </div>
  );
}

export default Home;
