import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

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

          {/* Pricing */}
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

          {/* About */}
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

          {/* Contact */}
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

          {/* Dark Mode Toggle */}
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
    </nav>
  );
};

export default Navbar;
