import React, { useState, useEffect } from "react";
import { tmdb } from "../Api/Tmdbapi";
import CardTV from "./CardTV";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularTV = () => {
  const [tv, setTV] = useState([]);
  useEffect(() => {
    const dataTV = async () => {
      try {
        const responseTV = await tmdb.get("/tv/popular");
        setTV(responseTV.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    dataTV();
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
      {tv.map((tvShow) => {
        return <CardTV key={tvShow.id} image={tvShow.poster_path} id={tvShow.id} title={tvShow.title} />;
      })}
    </Slider>
  );
};

export default PopularTV;
