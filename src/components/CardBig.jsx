import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const CardBig = ({ title, image, id }) => {
  const poster = "https://image.tmdb.org/t/p/w400" + image;

  return (
    <Box sx={{ margin: "0.2rem" }}>
      <Link to={`/${id}`}>
        <img src={poster} alt={title} />
      </Link>
    </Box>
  );
};

export default CardBig;
