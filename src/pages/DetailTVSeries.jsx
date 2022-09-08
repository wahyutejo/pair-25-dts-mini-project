import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { tmdb } from "../Api/Tmdbapi";
import { Container, Box, Typography } from "@mui/material";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DetailTVSeries = () => {
  const { id } = useParams();
  const [series, setSeries] = useState([]);
  const image = `https://image.tmdb.org/t/p/w500${series.poster_path}`;

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const responseSeries = await tmdb.get(`/tv/${id}`);
        setSeries(responseSeries.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSeries();
  }, [id]);

  return (
    <Container className="App">
      <Box className="App-header">
        <Navbar />
      </Box>
      <Box sx={{ display: "flex" }} loading="lazy">
        <Box sx={{ width: "50vw", m: 0 }}>
          <img src={image} alt={series.name} />
        </Box>
        <Box sx={{ width: "50vw" }}>
          <Box sx={{ mt: 10, mb: 5, pl: 10 }}>
            <Typography variant="h4" sx={{ m: 0, p: 0 }}>
              Detail TV Series
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", m: 0, p: 0 }}>
            <Box sx={{ display: "flex", mt: 2 }}>
              <Box sx={{ width: "30vw" }}>
                <Typography variant="body1">Title</Typography>
              </Box>
              <Box sx={{ width: "70vw", textAlign: "left" }}>
                <Typography variant="body1">{series.original_name}</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", mt: 2 }}>
              <Box sx={{ width: "30vw" }}>
                <Typography variant="body1">Rating</Typography>
              </Box>
              <Box sx={{ width: "70vw", textAlign: "left" }}>
                <Typography variant="body1">{series.vote_average}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", mt: 2 }}>
              <Box sx={{ width: "30vw" }}>
                <Typography variant="body1">Language</Typography>
              </Box>
              <Box sx={{ width: "70vw", textAlign: "left" }}>
                <Typography variant="body1">{series.original_language}</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", mt: 2 }}>
              <Box sx={{ width: "30vw" }}>
                <Typography variant="body1">Release date</Typography>
              </Box>
              <Box sx={{ width: "70vw", textAlign: "left" }}>
                <Typography variant="body1">{series.first_air_date}</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", mt: 2 }}>
              <Box sx={{ width: "30vw" }}>
                <Typography variant="body1">Overview</Typography>
              </Box>
              <Box sx={{ width: "70vw", textAlign: "left" }}>
                <Typography variant="body1">{series.overview}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="footer">
        <Footer />
      </Box>
    </Container>
  );
};

export default DetailTVSeries;
