import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const CardMovie = ({ title, image, id }) => {
  const poster = "https://image.tmdb.org/t/p/w200" + image;

  return (
    <Box loading="lazy">
      <Link to={`/${id}`}>
        <img src={poster} alt={title} />
      </Link>
    </Box>
  );
};

export default CardMovie;
