import React, { useState, useEffect } from "react";
import { tmdb } from "../Api/Tmdbapi";
import TopCard from "./TopCard";
import Carousel from "react-material-ui-carousel";

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
    <Carousel>
      {movies.map((movie) => {
        return <TopCard key={movie.id} backdrop={movie.backdrop_path} overview={movie.overview} title={movie.title} release={movie.release_date} id={movie.id} />;
      })}
    </Carousel>
  );
};

export default Trending;
