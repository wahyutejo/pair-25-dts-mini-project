import React from "react";
import {Box, Typography, Container} from "@mui/material";

const CardBig = ({ title, image, release, overview }) => {
  const poster = "https://image.tmdb.org/t/p/w400" + image;

  return (
    <Container sx={{display: "flex", margin: "2rem"}}>
    <Box sx={{display: "flex", flexDirection: "column", margin: "2rem", width: "50vw", alignItems: "center", justifyContent: "center"}}>
    <Typography variant= "h4" textAlign="center" sx={{mb: 2}}>
    {title}
    </Typography>
    <Typography variant= "body1" textAlign="center" sx={{mb: 3}}>
    {release}
    </Typography>
    <Typography variant= "body2" textAlign="center">
    {overview}
    </Typography>
    </Box>
    <Box sx={{margin : "2rem"}}>
      <img src={poster} alt={title}/>
    </Box>
    </Container>
  );
};

export default CardBig;