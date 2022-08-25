import React from "react";
import "./App.css";
import PopularMovie from "./components/PopularMovie";
import TopRated from "./components/TopRated";
import PopularTV from "./components/PopularTV";
import Trending from "./components/Trending";
import NowPlaying from "./components/NowPlaying";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <main>
        <div className="card">
          <NowPlaying />
        </div>

        <h4>Popular</h4>

        <div className="card">
          <PopularMovie />
        </div>
        <h4>Top Rated</h4>

        <div className="card">
          <TopRated />
        </div>
        <h4>TV Popular</h4>

        <div className="card">
          <PopularTV />
        </div>

        <h4>Trending</h4>
        <div className="card">
          <Trending />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
