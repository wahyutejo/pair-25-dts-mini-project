import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailMovie from "./pages/DetailMovie";
import TVSeries from "./pages/TVSeries";
import NewAndPopular from "./pages/NewAndPopular";
import Movie from "./pages/Movie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<DetailMovie />} />
        <Route path="/series" element={<TVSeries />} />
        <Route path="/newandpopular" element={<NewAndPopular />} />
        <Route path="/movies" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
