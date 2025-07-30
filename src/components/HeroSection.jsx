// src/components/HeroSection.jsx
const HeroSection = () => {
  return (
    <section className="h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Level Up Your Online Presence
      </h1>
      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        BassUp builds high-performance websites for creatives, brands, and businesses.
        E-commerce, portfolios, and more – we've got you covered.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;
