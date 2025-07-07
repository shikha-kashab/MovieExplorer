import React, { useEffect, useState } from "react";

import Modal from "react-modal";

const API_KEY = "98246019";

const genres = [
  "Action",
  "Drama",
  "Comedy",
  "Sci-Fi",
  "Horror",
  "Animation",
  "Adventure",
];

const genreMap = {
  Action: ["The Dark Knight", "Avengers", "Inception"],
  Drama: ["Titanic", "The Notebook", "Joker"],
  Comedy: ["The Mask", "The Internship", "Deadpool"],
  "Sci-Fi": ["Interstellar", "The Matrix", "Inception"],
  Horror: ["The Conjuring", "A Quiet Place"],
  Animation: ["Up", "Toy Story", "Frozen"],
  Adventure: ["Jumanji", "Avatar", "The Martian"],
};

const CatalogueScreen = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMovie(null);
  };

  const fetchMovie = async (title) => {
    const res = await fetch(
      `https://www.omdbapi.com/?t=${encodeURIComponent(
        title
      )}&apikey=${API_KEY}`
    );
    const data = await res.json();
    return data;
  };

  const fetchMovies = async () => {
    let titles = [];

    if (searchQuery) {
      titles = [searchQuery];
    } else if (selectedGenre) {
      titles = genreMap[selectedGenre] || [];
    } else {
      titles = Object.values(genreMap).flat();
    }

    const responses = await Promise.all(titles.map(fetchMovie));
    setMovies(responses.filter((m) => m && m.Title));
  };

  useEffect(() => {
    fetchMovies();
  }, [searchQuery, selectedGenre]);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 md:px-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">🎞️ Movie Catalogue</h1>
        <p className="text-gray-400">
          Browse by genre or search for a specific movie
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Genre Filter */}
        <div className="flex flex-wrap gap-3 justify-center">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() =>
                setSelectedGenre((prev) => (prev === genre ? "" : genre))
              }
              className={`px-4 py-2 rounded-full border transition ${
                selectedGenre === genre
                  ? "bg-red-600 text-white border-red-500"
                  : "border-gray-600 text-gray-300 hover:bg-white hover:text-black"
              }`}>
              {genre}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by movie name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-full md:w-64 bg-gray-800 text-white rounded-full border border-gray-600 focus:outline-none focus:border-red-500"
        />
      </div>

      {/* Movie Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg border border-gray-800 hover:border-red-500 p-4 shadow-md transform hover:scale-105 transition">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-72 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{movie.Title}</h3>
            <p className="text-sm text-gray-400 mb-1">🎬 {movie.Director}</p>
            <p className="text-sm text-gray-400 mb-2">
              ⭐ {movie.imdbRating} / 10
            </p>
            <button
              onClick={() => openModal(movie)}
              className="w-full mt-2 py-2 bg-white text-black font-medium hover:bg-red-600 hover:text-white rounded-full transition">
              📖 Read More About Movie
            </button>
          </div>
        ))}
      </div>

      {/* Storyline Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70">
        {selectedMovie && (
          <div className="bg-gray-900 text-white p-6 rounded-lg max-w-xl w-full shadow-2xl border border-gray-700 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-2xl text-white hover:text-red-500 transition">
              ✖
            </button>
            <img
              src={selectedMovie.Poster}
              alt={selectedMovie.Title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-3xl font-bold mb-2">{selectedMovie.Title}</h2>
            <p className="text-sm text-gray-400 mb-2">
              🎬 Directed by: {selectedMovie.Director}
            </p>
            <p className="text-gray-200 leading-relaxed text-base">
              {selectedMovie.Plot}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CatalogueScreen;
