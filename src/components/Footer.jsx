import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">BassUp</h3>
          <p>Helping businesses thrive with custom web solutions.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><NavLink to="/" className="hover:text-teal-400">Home</NavLink></li>
            <li><NavLink to="/pricing" className="hover:text-teal-400">Pricing</NavLink></li>
            <li><NavLink to="/about" className="hover:text-teal-400">About</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-teal-400">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p>Email: <a href="mailto:sagnab034@gmail.com" className="text-teal-400 hover:underline">sagnab034@gmail.com</a></p>
          <p>Location: Kedah, Alor Setar, Malaysia</p>

          <div className="mt-4 flex items-center gap-4 text-xl">
            <a
              href="https://www.linkedin.com/in/bassirou-sagna-a66b04342"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-400"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/baay_bass221"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-10">
        © 2025 BassUp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
