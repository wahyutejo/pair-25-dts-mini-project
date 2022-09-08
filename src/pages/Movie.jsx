import React, { useState, useEffect } from "react";
import { tmdb } from "../Api/Tmdbapi";
import CardList from "../components/CardList";
import { Container, Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import Pagination from "../components/Pagination";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

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

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = movies.slice(firstPostIndex, lastPostIndex);

  return (
    <Container className="App">
      <Box className="App-header">
        <Navbar />
      </Box>

      <ImageList sx={{ width: 1200 }}>
        <ImageListItem cols={2}>
          <Typography variant="h4" textAlign="center">
            Movies
          </Typography>
        </ImageListItem>

        {currentPost.map((movie) => {
          return <CardList key={movie.id} title={movie.title} image={movie.backdrop_path} release={movie.release_date} id={movie.id} />;
        })}
      </ImageList>
      <Pagination totalPosts={movies.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />

      <Box className="footer">
        <Footer />
      </Box>
    </Container>
  );
};

export default Movie;
