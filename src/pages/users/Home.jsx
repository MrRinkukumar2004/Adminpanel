import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full text-center transform transition duration-700 ease-in-out animate-fade-in">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Welcome to CloudOps Login
        </h1>
        <p className="text-gray-600 mb-6">
          Your gateway to seamless cloud-based operations. Please sign in to
          continue.
        </p>
        <div className="space-x-4">
          <a
            href="/login"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            Login
          </a>
          <a
            href="/register"
            className="inline-block bg-gray-200 text-blue-700 px-6 py-2 rounded-full shadow-md hover:bg-gray-300 hover:scale-105 transition-all duration-300"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
