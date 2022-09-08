import React from "react";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import { Link } from "react-router-dom";

const CardListTV = ({ title, image, release, id }) => {
  const poster = "https://image.tmdb.org/t/p/w500" + image;

  return (
    <Link to={`/series/${id}`}>
      <ImageListItem>
        <img src={poster} alt={title} loading="lazy" />

        <ImageListItemBar title={title} subtitle={release} sx={{ height: 100 }} />
      </ImageListItem>
    </Link>
  );
};

export default CardListTV;
