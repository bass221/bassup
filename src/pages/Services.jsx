import { Link } from "react-router-dom";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    const toggleBtn = document.getElementById("theme-toggle");
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (localStorage.theme === "dark" || (!("theme" in localStorage) && userPrefersDark)) {
      document.documentElement.classList.add("dark");
      toggleBtn.textContent = "☀️";
    } else {
      document.documentElement.classList.remove("dark");
      toggleBtn.textContent = "🌙";
    }

    toggleBtn?.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
      }
    });
  }, []);

  const services = [
    {
      title: "Portfolio Builder",
      description:
        "Build sleek personal portfolios to showcase your work as a freelancer, designer, or developer.",
      path: "/services/portfolio",
    },
    {
      title: "E-commerce Builder",
      description:
        "Launch a modern online store with Stripe/PayPal integration and responsive product galleries.",
      path: "/services/ecommerce",
    },
    {
      title: "Agency Builder",
      description:
        "Perfect for startups and small businesses. Highlight your services, team, and contact details.",
      path: "/services/agency",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-white dark:bg-black text-black dark:text-white transition duration-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Website Tools</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Link
              to={service.path}
              key={index}
              className="block bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
