import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Modal from "react-modal";

// Base url for movie posters
const base_url = "https://image.tmdb.org/t/p/original/";

// Youtube vid player
const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  let modalKey = useState("");
  Modal.setAppElement("#root");

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = (movie) => {
    setIsOpen(true);
    modalKey = movie;
    console.log(modalKey);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  // console.log(movies);

  //  runs based on a specific conditions/variables
  useEffect(() => {
    // if [] empty, run once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl); // wait for answer then do something
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // const handleClick = () => {
  //   return <p>{movie.name}</p>;
  // };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => openModal(movie.id)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            loading="lazy"
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <p></p>
      </Modal>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      {/*  container > posters/images */}
    </div>
  );
}

export default Row;
