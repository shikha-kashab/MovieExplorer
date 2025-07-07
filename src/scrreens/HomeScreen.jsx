import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useEffect, useState } from "react";

import { Carousel } from "react-responsive-carousel";
import Modal from "react-modal";
import ReactPlayer from "react-player";

const API_KEY = "98246019"; // Your OMDb API key

const HomeScreen = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  console.log("trailerUrl", trailerUrl);

  const openModal = (title) => {
    const trailerMap = {
      Inception: "https://www.youtube.com/watch?v=YoHD9XEInc0",
      Interstellar: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
      Tenet: "https://www.youtube.com/watch?v=L3pk_TBkihU",
      "The Dark Knight": "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      "The Shawshank Redemption": "https://www.youtube.com/watch?v=6hB3S9bIaco",
      "The Godfather": "https://www.youtube.com/watch?v=sY1S34973zA",
      "Forrest Gump": "https://www.youtube.com/watch?v=bLvqoHBptjg",
      "The Matrix": "https://www.youtube.com/watch?v=vKQi3bBA1y8",
    };

    setTrailerUrl(trailerMap[title] || "https://www.youtube.com");
    setModalIsOpen(true);

    console.log("title", title);
  };

  const closeModal = () => {
    setTrailerUrl("");
    setModalIsOpen(false);
  };

  useEffect(() => {
    const fetchMovies = async (titles) => {
      const responses = await Promise.all(
        titles.map((title) =>
          fetch(
            `https://www.omdbapi.com/?t=${encodeURIComponent(
              title
            )}&apikey=${API_KEY}`
          ).then((res) => res.json())
        )
      );
      return responses;
    };

    const loadLatestMovies = async () => {
      const latest = await fetchMovies([
        "Inception",
        "Interstellar",
        "Tenet",
        "The Dark Knight",
      ]);
      setLatestMovies(latest);
    };

    const loadTopRatedMovies = async () => {
      const top = await fetchMovies([
        "The Shawshank Redemption",
        "The Godfather",
        "Forrest Gump",
        "The Matrix",
      ]);
      setTopRatedMovies(top);
    };

    loadLatestMovies();
    loadTopRatedMovies();
  }, []);

  return (
    <div className=" text-white min-h-screen">
      {/* Banner Carousel */}
      <div className="w-full">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          swipeable
          emulateTouch
          axis="horizontal"
          className="text-left">
          {latestMovies.map((movie, index) => (
            <div
              key={index}
              className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${movie.Poster})` }}>
              <div className=" bg-opacity-70 p-6 rounded-xl shadow-xl max-w-2xl text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">
                  {movie.Title}
                </h2>
                <p className="text-sm mb-2">Directed by: {movie.Director}</p>
                <p className="text-base text-gray-300 line-clamp-4">
                  {movie.Plot}
                </p>
                <button
                  onClick={() => openModal(movie.Title)}
                  className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 transition rounded-full">
                  ▶ Play Trailer
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Trailer Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 h-full w-full"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50">
        <div className="bg-black p-4 rounded-lg  w-full h-full">
          <button
            onClick={closeModal}
            className="text-white float-right text-xl mb-4">
            ✖
          </button>
          <ReactPlayer src={trailerUrl} controls width="100%" height={"100%"} />
        </div>
      </Modal>

      {/* Top IMDB Rated Movies */}
      <div className="px-6 py-10 bg-black">
        <h2 className="text-3xl font-bold mb-6 text-center mb-10">
          🔥 Top IMDB Rated Movies
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topRatedMovies.map((movie, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 hover:shadow-xl">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-72 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{movie.Title}</h3>
                <p className="text-sm text-gray-400">
                  ⭐ {movie.imdbRating} / 10
                </p>
                <p className="text-xs mt-1 text-gray-300">{movie.Genre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
