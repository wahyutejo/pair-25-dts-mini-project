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
import DetailTVSeries from "./pages/DetailTVSeries";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<DetailMovie />} />
        <Route path="/series/:id" element={<DetailTVSeries />} />
        <Route path="/series" element={<TVSeries />} />
        <Route path="/newandpopular" element={<NewAndPopular />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
