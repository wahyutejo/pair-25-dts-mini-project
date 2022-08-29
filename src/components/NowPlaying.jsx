import React, { useState, useEffect } from "react";
import { tmdb } from "../Api/Tmdbapi";
import CardBig from "./CardBig";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: false,
    slidesToShow: 3,
    autoplay: true,
    speed: 100,
    infinite: true,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {movies.map((movie) => {
        return <CardBig key={movie.id} image={movie.poster_path} title={movie.title} id={movie.id} />;
      })}
    </Slider>
  );
};

export default NowPlaying;
