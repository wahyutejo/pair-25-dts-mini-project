import React, { useState, useEffect } from "react";
import { tmdb } from "../Api/Tmdbapi";
import CardMovie from "../components/CardMovie";
import { Container, Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const dataMovie = async () => {
      try {
        const responseMovie = await tmdb.get("/movie/popular");
        setMovies(responseMovie.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    dataMovie();
  }, []);

  return (
    <Container className="App">
      <Navbar />
      <Typography variant="h4">New And Popular</Typography>
      <Box>
        {movies.map((movie) => {
          return <CardMovie key={movie.id} title={movie.title} image={movie.poster_path} id={movie.id} />;
        })}
      </Box>
      <Footer />
    </Container>
  );
};

export default Movie;
