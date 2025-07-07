import { Link } from "react-router-dom";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-purple-200 mb-4">404</h1>
          <div className="w-24 h-1 bg-purple-300 mx-auto mb-8"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-purple-200 text-lg mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. It might have been
          moved, deleted, or you entered the wrong URL.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => window.history.back()}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 mr-4">
            Go Back
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="bg-transparent hover:bg-purple-800 text-purple-200 font-semibold py-3 px-6 rounded-lg border-2 border-purple-400 hover:border-purple-300 transition-all duration-300">
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
