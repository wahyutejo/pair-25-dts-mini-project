import React, { useState, useEffect } from "react";
import { tmdb } from "../Api/Tmdbapi";
import { Container, Typography, Box, ImageList, ImageListItem } from "@mui/material";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardListTV from "../components/CardListTV";
import Pagination from "../components/Pagination";

const TVSeries = () => {
  const [tvseries, setTvSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  useEffect(() => {
    const dataSeries = async () => {
      try {
        const responseSeries = await tmdb.get("/tv/popular");
        setTvSeries(responseSeries.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    dataSeries();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = tvseries.slice(firstPostIndex, lastPostIndex);

  return (
    <Container className="App">
      <Box className="App-header">
        <Navbar />
      </Box>
      <ImageList sx={{ width: 1200 }}>
        <ImageListItem cols={2}>
          <Typography variant="h4">TV Series</Typography>
        </ImageListItem>

        {currentPost.map((tvShow) => {
          return <CardListTV key={tvShow.id} image={tvShow.backdrop_path} title={tvShow.name} release={tvShow.first_air_date} id={tvShow.id} />;
        })}
      </ImageList>

      <Pagination totalPosts={tvseries.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Box className="footer">
        <Footer />
      </Box>
    </Container>
  );
};

export default TVSeries;
