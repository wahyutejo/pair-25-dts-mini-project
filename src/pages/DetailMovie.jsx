import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { tmdb } from "../Api/Tmdbapi";

const DetailMovie = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const image = `https://image.tmdb.org/t/p/w500${movies.poster_path}`;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const responseMovie = await tmdb.get(`/movie/${id}`);
        setMovies(responseMovie.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <>
      <img src={image} alt={movies.title} />
      <h3>{movies.title}</h3>
      <p>{movies.release_date}</p>
      <p>{movies.original_language}</p>
      <p>{movies.overview}</p>
    </>
  );
};

export default DetailMovie;
