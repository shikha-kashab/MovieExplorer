import React from "react";

const teamMembers = [
  {
    name: "Shikha (Team Lead)",
    rollNo: "2224940",
    className: "BCA - Final Year",
    branch: "Computer Applications",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Manpreet Kaur",
    rollNo: "2224908",
    className: "BCA - Final Year",
    branch: "Computer Applications",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
];

const AboutUsScreen = () => {
  return (
    <div className="min-h-screen bg-black text-white py-10 px-4 md:px-20">
      {/* Project Overview */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-6">
          🎬 About Movie Explorer
        </h2>
        <div className="max-w-4xl mx-auto text-center text-lg text-gray-300 leading-relaxed">
          <p>
            <span className="font-semibold text-red-500">Movie Explorer</span>{" "}
            is a React-based web app designed to let users explore trending
            movies, watch trailers, and discover top-rated films. With real-time
            movie data and a modern interface, it's a fun way to stay updated on
            what's hot in the movie world.
          </p>
          <p className="mt-4 font-medium text-green-400">
            This project is developed as part of our BCA Final Year curriculum
            by a dedicated student team.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-10">
          👩‍💻 Our Development Team
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center text-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl border border-gray-700 hover:border-red-500 p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-red-600 hover:border-white transition"
              />
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-sm text-gray-400 mt-1">
                Roll No: {member.rollNo}
              </p>
              <p className="text-sm text-gray-400">{member.className}</p>
              <p className="text-sm text-gray-400">{member.branch}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsScreen;
