import React, { useState, useEffect } from "react";
import { tmdb } from "../Api/Tmdbapi";
import CardMovie from "./CardMovie";

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

  return (
    <>
      {tv.map((tvShow) => {
        return <CardMovie key={tvShow.id} image={tvShow.poster_path} />;
      })}
    </>
  );
};

export default PopularTV;
