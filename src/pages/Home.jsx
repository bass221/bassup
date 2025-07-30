import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const toggleBtn = document.getElementById('theme-toggle');
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const applyInitialTheme = () => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && userPrefersDark)) {
        document.documentElement.classList.add('dark');
        if (toggleBtn) toggleBtn.textContent = '☀️';
      } else {
        document.documentElement.classList.remove('dark');
        if (toggleBtn) toggleBtn.textContent = '🌙';
      }
    };

    const handleThemeToggle = () => {
      document.documentElement.classList.toggle('dark');
      if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '☀️';
      } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '🌙';
      }
    };

    const handleMobileToggle = () => {
      mobileMenu?.classList.toggle('hidden');
    };

    applyInitialTheme();
    toggleBtn?.addEventListener('click', handleThemeToggle);
    mobileMenuBtn?.addEventListener('click', handleMobileToggle);

    return () => {
      toggleBtn?.removeEventListener('click', handleThemeToggle);
      mobileMenuBtn?.removeEventListener('click', handleMobileToggle);
    };
  }, []);

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 px-6 text-center transition duration-300">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">We Build Websites That Convert</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Whether you're selling products or showing off your portfolio, BassUp delivers clean, responsive websites tailored to your goals.
        </p>
        <Link to="/pricing" className="bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
          Get Your Website
        </Link>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-r from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 px-6 text-center transition duration-300">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '⚡',
              title: 'Fast Delivery',
              text: 'We deliver websites in record time without sacrificing quality.',
              href: '/services#delivery',
            },
            {
              icon: '📱',
              title: 'Fully Responsive',
              text: 'Your website will look perfect on desktop, tablet, and mobile devices.',
              href: '/services#responsive',
              delay: 'delay-100',
            },
            {
              icon: '🎨',
              title: 'Custom Design',
              text: 'Every site is tailored to match your brand, goals, and audience.',
              href: '/services#custom',
              delay: 'delay-200',
            },
          ].map(({ icon, title, text, href, delay = '' }, i) => (
            <Link
              key={i}
              to={href}
              className={`bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1 animate-fade-in ${delay}`}
            >
              <div className="text-4xl mb-4 text-teal-500">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-gradient-to-r from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 px-6 text-center transition duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">Our Recent Work</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                img: 'images/voitkevichB.jpg',
                title: 'Fashion Store',
                desc: 'Clean, modern e-commerce design',
              },
              {
                img: 'images/photo.webp',
                title: 'Wavy beats',
                desc: 'Responsive website for beat-makers',
                link: 'https://wavybeat-frontend.vercel.app/',
              },
              {
                img: 'images/fauxels.jpg',
                title: 'Tech Business',
                desc: 'Landing page for SaaS startup',
              },
            ].map(({ img, title, desc, link }, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-fade-in">
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-48 object-cover rounded-t-md hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                ) : (
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-48 object-cover rounded-t-md hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold dark:text-white">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
