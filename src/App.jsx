import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatorForm from "./creator/CreatorForm";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import PortfolioBuilder from "./pages/PortfolioBuilder";
import EcommerceBuilder from "./pages/EcommerceBuilder";
import AgencyBuilder from "./pages/AgencyBuilder";

const App = () => {
  // ✅ Load from localStorage initially
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

useEffect(() => {
  localStorage.setItem("darkMode", darkMode);

  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  console.log("DARK MODE:", darkMode); // Optional debug log
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
