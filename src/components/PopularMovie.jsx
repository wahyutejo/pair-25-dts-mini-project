import React, { useState, useEffect } from "react";
import { tmdb } from "../Api/Tmdbapi";
import CardMovie from "./CardMovie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: false,
    slidesToShow: 5,
    autoplay: true,
    speed: 100,
    infinite: true,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {movies.map((movie) => {
        return <CardMovie key={movie.id} title={movie.title} image={movie.poster_path} id={movie.id} />;
      })}
    </Slider>
  );
}

export default PopularMovie;
