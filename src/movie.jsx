import React, { useState } from "react";

function Movie() {
  const [reserves, setReserves] = useState([]);
  const URL = "https://swapi.dev/api/films/?format=json";

  async function makeRequest() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setReserves(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="">
      <button onClick={makeRequest}>Click to see movie</button>
      <div className="movie-container">
        {reserves.length > 0 ? (
          reserves.map((movie, index) => (
            <div key={index} className="movie-card">
              <h3>{movie.title}</h3>
              <p>Episode: {movie.episode_id}</p>
              <p>Director: {movie.director}</p>
              <p>Producer: {movie.producer}</p>
              <p>Opening Crawl: {movie.opening_crawl}</p>
            </div>
          ))
        ) : (
          <p>No movie data available</p>
        )}
      </div>
    </div>
  );
}

export default Movie;

