import React, { useState, useEffect } from "react";
import {tmdb} from "../Api/Tmdbapi";
import CardBig from "./CardBig";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const dataMovie = async () => {
      try {
        const responseMovie = await tmdb.get("/trending/all/week");
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
          return <CardBig key={movie.id} image={movie.poster_path} />;
        })}
  
    </>
  );
};

export default Trending;
