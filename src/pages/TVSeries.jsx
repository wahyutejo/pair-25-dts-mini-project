import React, { useState, useEffect } from "react";
import { tmdb } from "../Api/Tmdbapi";
import CardMovie from "../components/CardMovie";
import { Container, Typography, Box } from "@mui/material";

const TVSeries = () => {
  const [tvseries, setTvSeries] = useState([]);

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

  return (
    <Container>
      <Typography variant="h4">TV Series</Typography>
      <Box>
        {tvseries.map((tvShow) => {
          return <CardMovie key={tvShow.id} image={tvShow.poster_path} id={tvShow.id} title={tvShow.title} />;
        })}
      </Box>
    </Container>
  );
};

export default TVSeries;
