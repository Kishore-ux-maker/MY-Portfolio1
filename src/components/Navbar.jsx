import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-transparent shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo or Site Name */}
        <div className="text-2xl font-bold text-white">Kishore.dev</div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="#Home" className="text-white font-medium hover:underline">Home</a>

            
          </li>
          <li>
              <a href="#About" className="text-white font-medium hover:underline">About</a>
          </li>
          <li>
             <a href="#Project" className="text-white font-medium hover:underline">Project</a>
          </li>
          <li>
             <a href="#Contact" className="text-white font-medium hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
