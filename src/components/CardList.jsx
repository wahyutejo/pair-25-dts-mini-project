import React from "react";
import { ImageListItem, ImageListItemBar } from "@mui/material";

const CardList = ({ title, image, release }) => {
  const poster = "https://image.tmdb.org/t/p/w500" + image;

  return (
    <ImageListItem>
      <img src={poster} alt={title} loading="lazy" />
      <ImageListItemBar title={title} subtitle={release} sx={{ height: 100 }} />
    </ImageListItem>
  );
};

export default CardList;
