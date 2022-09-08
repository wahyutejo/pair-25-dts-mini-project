import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

const TopCard = ({ title, backdrop, release, overview, id }) => {
  const poster = "https://image.tmdb.org/t/p/w500" + backdrop;

  return (
    <Container sx={{ display: "flex", margin: "2rem" }}>
      <Box sx={{ display: "flex", flexDirection: "column", margin: "2rem", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h4" textAlign="center" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 3 }}>
          {release}
        </Typography>
        <Typography variant="body2" textAlign="center">
          {overview}
        </Typography>
      </Box>
      <Box sx={{ margin: "2rem" }}>
        <Link to={`/${id}`}>
          <img src={poster} alt={title} />
        </Link>
      </Box>
    </Container>
  );
};

export default TopCard;
