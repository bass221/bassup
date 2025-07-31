import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl text-teal-400 dark:text-teal-400 font-bold"
        >
          BassUp
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-gray-700 dark:text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-black dark:text-white items-center">
          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="cursor-pointer hover:text-blue-600 px-2 py-1 rounded-md">
              Services
            </div>

            {showDropdown && (
              <ul className="absolute left-0 mt-2 bg-white dark:bg-gray-800 rounded-md shadow-md py-2 w-52 z-50">
                <li>
                  <NavLink
                    to="/services/ecommerce"
                    className="block w-full px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    E-Commerce
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/business"
                    className="block w-full px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Business Websites
                  </NavLink>
                </li>
                <li>
                  <a
                    href="https://portfolio-builder-sepia.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Portfolio Builder
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-500 dark:text-teal-300 font-semibold"
                  : "hover:text-blue-600"
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-500 dark:text-teal-300 font-semibold"
                  : "hover:text-blue-600"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-500 dark:text-teal-300 font-semibold"
                  : "hover:text-blue-600"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 px-3 py-1 border rounded dark:border-gray-600 border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-3 shadow-lg">
          <NavLink to="/pricing" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600">
            Pricing
          </NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600">
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600">
            Contact
          </NavLink>

          {/* Services Submenu (Mobile) */}
          <details className="text-left">
            <summary className="cursor-pointer hover:text-blue-600">Services</summary>
            <div className="ml-4 mt-2 space-y-1">
              <NavLink to="/services/ecommerce" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600">
                E-Commerce
              </NavLink>
              <NavLink to="/services/business" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600">
                Business Websites
              </NavLink>
              <a
                href="https://portfolio-builder-sepia.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-600"
              >
                Portfolio Builder
              </a>
            </div>
          </details>

          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 w-full px-3 py-2 border rounded dark:border-gray-600 border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
