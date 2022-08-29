import React from "react";
import "./App.css";
import { Container, Box, Typography } from "@mui/material";
import PopularMovie from "./components/PopularMovie";
import TopRated from "./components/TopRated";
import PopularTV from "./components/PopularTV";
import Trending from "./components/Trending";
import NowPlaying from "./components/NowPlaying";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <main>
        <Box>
          <Trending />
        </Box>

        <Box className="card">
          <Typography variant="h4" sx={{ mb: 1 }}>
            Popular
          </Typography>

          <Box>
            <PopularMovie />
          </Box>
        </Box>

        <Box className="card">
          <Typography variant="h4" sx={{ mb: 1 }}>
            Top Rated
          </Typography>
          <Box>
            <TopRated />
          </Box>
        </Box>
        <Box className="card">
          <Typography variant="h4" sx={{ mb: 1 }}>
            TV Popular
          </Typography>
          <Box>
            <PopularTV />
          </Box>
        </Box>
        <Box className="card">
          <Typography variant="h4" sx={{ mb: 1 }}>
            Now Playing
          </Typography>
          <Box>
            <NowPlaying />
          </Box>
        </Box>
        <Box className="footer">
          <Footer />
        </Box>
      </main>
    </Container>
  );
}

export default App;
