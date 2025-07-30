import React from "react";

const Contact = () => {
  React.useEffect(() => {
    const mobileToggle = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }

    const toggleBtn = document.getElementById("theme-toggle");

    if (toggleBtn) {
      const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && userPrefersDark)
      ) {
        document.documentElement.classList.add("dark");
        toggleBtn.textContent = "☀️";
      } else {
        document.documentElement.classList.remove("dark");
        toggleBtn.textContent = "🌙";
      }

      toggleBtn.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        if (document.documentElement.classList.contains("dark")) {
          localStorage.setItem("theme", "dark");
          toggleBtn.textContent = "☀️";
        } else {
          localStorage.setItem("theme", "light");
          toggleBtn.textContent = "🌙";
        }
      });
    }
  }, []);

  return (
    <>
      <section
        id="contact"
        className="bg-gradient-to-r from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 px-6 text-center transition duration-300"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-8 dark:text-white">
          Have questions or ready to start your project? Drop us a message below or email us directly.
        </p>
        <form
          action="https://formspree.io/f/mgvzajdq"
          method="POST"
          className="max-w-2xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="text-black w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
