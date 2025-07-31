// pages/Pricing.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="bg-gradient-to-r from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 px-6 text-center transition duration-300">
      <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "Starter",
            price: "$149",
            features: ["1 Page Design", "Responsive Layout", "Basic Contact Form"],
          },
          {
            title: "Professional",
            price: "$299",
            features: ["Up to 5 Pages", "Custom Features", "SEO Optimized"],
          },
          {
            title: "Premium",
            price: "$499+",
            features: ["Unlimited Pages", "Custom Integrations", "Ongoing Support"],
          },
        ].map((plan) => (
          <div key={plan.title} className="p-6 border rounded-lg text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{plan.title}</h3>
            <p className="text-2xl font-bold text-teal-500 mb-4">{plan.price}</p>
            <ul className="text-gray-600 mb-4 space-y-1 dark:text-white">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <NavLink
              to="/contact"
              className="inline-block bg-teal-400 hover:bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Get Started
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
