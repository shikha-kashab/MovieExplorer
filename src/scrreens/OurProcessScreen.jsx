import React from "react";

const OurProcessScreen = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Section: Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 hover:text-red-500 transition duration-300">
          🎬 About the Movie Explorer Project
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          This application is a final-year student project designed to help
          users explore the world of movies. From discovering top-rated films to
          browsing by genre and watching trailers, Movie Explorer brings
          entertainment data to your fingertips.
        </p>
      </div>

      {/* Section: Process Followed */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 hover:text-red-500 transition duration-300 text-center">
          🧩 Our Development Process
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-500 transition">
            <h3 className="text-xl font-bold mb-2">1. Planning & Research</h3>
            <p className="text-gray-400">
              We analyzed several movie APIs and UI frameworks before deciding
              on OMDb API and Tailwind CSS. User interface structure and routing
              were also planned in this phase.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-500 transition">
            <h3 className="text-xl font-bold mb-2">2. Component Design</h3>
            <p className="text-gray-400">
              All pages such as Home, About Us, Catalogue, and Our Process were
              built as reusable React components with route-based navigation
              using React Router.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-500 transition">
            <h3 className="text-xl font-bold mb-2">3. API Integration</h3>
            <p className="text-gray-400">
              Fetching and managing movie data via JavaScript's fetch API and
              displaying it in carousels and cards dynamically across screens.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-500 transition">
            <h3 className="text-xl font-bold mb-2">4. Styling & Animation</h3>
            <p className="text-gray-400">
              We heavily customized styles using Tailwind CSS, added hover
              animations, responsive layouts, and smooth modal transitions to
              enhance user experience.
            </p>
          </div>
        </div>
      </div>

      {/* Section: Final Note */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-4 hover:text-red-500 transition">
          💡 Final Words
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Movie Explorer is not just a project, it's a demonstration of our
          learning journey in frontend development with React, API integration,
          and UI/UX design using Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default OurProcessScreen;
