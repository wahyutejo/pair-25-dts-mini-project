import React, { useState, useEffect } from "react";
import {tmdb} from "../Api/Tmdbapi";
import CardMovie from "./CardMovie";

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const dataMovie = async () => {
      try {
        const responseMovie = await tmdb.get("/movie/top_rated");
        setMovies(responseMovie.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    dataMovie();
  }, []);

  return (
    <>
     
        {movies.map((movie) => {
          return <CardMovie key={movie.id} image={movie.poster_path} />;
        })}
  
    </>
  );
};

export default TopRated;
