import React, { useState, useEffect } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=144f2da364f1292dffcf97c1397692b0&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);

  return (
    <div>
      <ul className="grid grid-cols-4 items-center">
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              className="rounded-lg w-[180px]"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3 className="text-[#fff] text-[14px]">{movie.title}</h3>
            <p className="flex justify-start items-center text-[#666666]">
              Rating: <StarRateIcon color="primary" fontSize="small" />
              {movie.vote_average}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
