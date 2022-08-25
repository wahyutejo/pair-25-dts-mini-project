import React, { useState, useEffect } from "react";
import { tmdb } from "../Api/Tmdbapi";
import TopCard from "./TopCard";
import Carousel from "react-material-ui-carousel";

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const dataMovie = async () => {
      try {
        const responseMovie = await tmdb.get("/movie/now_playing");
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
        return <TopCard key={movie.id} image={movie.poster_path} title={movie.title} release={movie.release_date} overview={movie.overview} />;
      })}
    </Carousel>
  );
};

export default NowPlaying;
