import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Favorites from "./Favorites"
import HaveRead from "./HaveRead";
import ReadingNow from "./ReadingNow";
import ToRead from "./ToRead";


export default function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Welcome to Melvin's Library</h1> 
        </header>
        <Navbar /> 
        <main>
          <Routes>
            <Route path="/" element={<Favorites />} />
            <Route path="/have-read" element={<HaveRead />} />
            <Route path="/reading-now" element={<ReadingNow />} />
            <Route path="/to-read" element={<ToRead />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
