import React from "react";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import { Link } from "react-router-dom";

const CardList = ({ title, image, release, id }) => {
  const poster = "https://image.tmdb.org/t/p/w500" + image;

  return (
    <Link to={`/movie/${id}`}>
      <ImageListItem>
        <img src={poster} alt={title} loading="lazy" />

        <ImageListItemBar title={title} subtitle={release} sx={{ height: 100 }} />
      </ImageListItem>
    </Link>
  );
};

export default CardList;
