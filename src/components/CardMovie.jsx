import React from "react";
import {Box} from "@mui/material";

const CardMovie = ({ title, image }) => {
  const poster = "https://image.tmdb.org/t/p/w200" + image;

  return (
    <Box sx={{margin : "0.2rem"}}>
      <img src={poster} alt={title}/>
      
    </Box>
  );
};

export default CardMovie;
