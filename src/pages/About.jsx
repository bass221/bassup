// src/pages/About.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ import Link


const About = () => {
  return (
    <section className="bg-gradient-to-r from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 px-6 text-center transition duration-300">
      <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">About BassUp</h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-center dark:text-white">
        BassUp is a creative web design studio that helps individuals and small businesses bring their online presence to life.
      </p>
      <p className="text-gray-600 max-w-3xl mx-auto text-center mt-4 dark:text-white">
        We combine design, strategy, and technology to give you a complete solution tailored to your needs.This is the main website all links to access
        the other website builders are right under the service dropdown section, it is easy, affordable and enjoyable as well, we got all the tools you need just pass and
        <b className="text-teal-400"> Bass</b> this up 💪🏿
      </p>
      <br /><hr/>
      <p className="text-gray-600 max-w-3xl mx-auto text-center mt-4 dark:text-white">
        ⚠️ E-commerce Builder (Comming up soon) <br />
        ⚠️ Business website Builder (Comming up soon)
      </p>
      <p className="text-gray-600 max-w-3xl mx-auto text-center mt-4 dark:text-white">
        Built by Bassirou Sagna
      </p>
    </section>
  );
};

export default About;
