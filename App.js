import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=3c0bd2c4";
const movie1 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovie("top");
  }, []);
  return (
    <div className="app">
      <h1>JOZE-MOVIES</h1>
      <h4>Get to no availbale movies</h4>
      <div className="search">
        <input
          value={searchTerm}
          placeholder="Search for movie"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movies[0]} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>
            No movies found with title {searchTerm === "" ? "none" : searchTerm}
          </h2>
        </div>
      )}
    </div>
  );
};

export default App;
