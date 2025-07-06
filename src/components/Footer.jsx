import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black/70 text-white py-6 flex flex-col items-center">
      <div className="flex space-x-6 mb-4">
        <a
          href="https://github.com/Kishore-ux-maker"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-[#f5f5f5] hover:scale-125 transition-transform"
        >
          <FaGithub />
        </a>
        <a
          href="http://linkedin.com/in/kishore7981"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-400 hover:scale-125 transition-transform"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/toxic_kishore"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-pink-400 hover:scale-125 transition-transform"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-sky-400 hover:scale-125 transition-transform"
        >
          <FaTwitter />
        </a>
      </div>

      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Kishore.dev. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
