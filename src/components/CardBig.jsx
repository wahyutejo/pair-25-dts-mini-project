import React from "react";
import {Box} from "@mui/material";

const CardBig = ({ title, image }) => {
  const poster = "https://image.tmdb.org/t/p/w400" + image;

  return (
    <Box sx={{margin : "0.2rem"}}>
      <img src={poster} alt={title}/>
      
    </Box>
  );
};

export default CardBig;