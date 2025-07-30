import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatorForm from "./creator/CreatorForm";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";  // Add this
import Footer from "./components/Footer";  // Add this
import { useState, useEffect } from "react";
import PortfolioBuilder from "./pages/PortfolioBuilder";
import EcommerceBuilder from "./pages/EcommerceBuilder";
import AgencyBuilder from "./pages/AgencyBuilder";


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className={darkMode ? "dark bg-black text-white" : "bg-white text-black"}>

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatorForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />

          {/* Website Builders */}
          <Route path="/services/portfolio" element={<PortfolioBuilder />} />
          <Route path="/services/ecommerce" element={<EcommerceBuilder />} />
          <Route path="/services/business" element={<AgencyBuilder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
