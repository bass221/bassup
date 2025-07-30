import { useNavigate, NavLink } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="text-2xl text-teal-400 dark:text-teal-400 font-bold"
        >
          BassUp
        </button>

        <ul className="hidden md:flex space-x-6 font-medium text-black dark:text-white items-center">
          {/* Services with hover dropdown */}
          <li className="relative group">
            <span className="cursor-pointer hover:text-blue-600">
              Services
            </span>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-800 rounded-md shadow-md py-2 w-48 text-black dark:text-white">
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                <NavLink to="/services/ecommerce">E-Commerce</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                <NavLink to="/services/portfolio">Portfolios</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                <NavLink to="/services/business">Business Websites</NavLink>
              </li>
            </ul>
          </li>

          {/* Replaced Portfolio with Pricing */}
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
