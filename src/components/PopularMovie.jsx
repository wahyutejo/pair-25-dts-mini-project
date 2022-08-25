import React, { useState, useEffect } from "react";
import { tmdb } from "../Api/Tmdbapi";
import CardMovie from "./CardMovie";
import Carousel from "react-elastic-carousel";

function PopularMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const dataMovie = async () => {
      try {
        const responseMovie = await tmdb.get("/movie/popular");
        setMovies(responseMovie.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    dataMovie();
  }, []);

  return (
    <Carousel>
      {movies.map((movie) => {
        return <CardMovie key={movie.id} title={movie.title} image={movie.poster_path} />;
      })}
    </Carousel>
  );
}

export default PopularMovie;
