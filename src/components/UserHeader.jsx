import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: lucide-react for icons

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            CloudOps
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/profile"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Profile
            </Link>
            <Link
              to="/admin"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Admin
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-white animate-fade-in-down">
          <Link
            to="/"
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            to="/profile"
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            Profile
          </Link>
          <Link
            to="/admin"
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            Admin
          </Link>
          <Link
            to="/login"
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default UserNavbar;
