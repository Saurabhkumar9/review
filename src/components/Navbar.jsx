import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and App Name */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-12 w-12 rounded-full shadow-md" />
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-white drop-shadow-md">
              <span className="text-red-400">K</span>
              <span className="text-orange-400">R</span>
              <span className="text-yellow-300">A</span>
              <span className="text-green-400">N</span>
              <span className="text-blue-400">T</span>
              <span className="text-purple-400">I</span>
            </h1>
          </div>

          {/* Navigation Links (Optional) */}
          <div className="hidden md:flex space-x-6">
        
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
