import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import CategoryPage from "./CategoryPage";


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
            <Route path="/" element={<CategoryPage />} />
            <Route
              path="/favorites"
              element={<CategoryPage category="Favorites" />}
            />
            <Route
              path="/reading-now"
              element={<CategoryPage category="Reading Now" />}
            />
            <Route
              path="/to-read"
              element={<CategoryPage category="To Read" />}
            />
            <Route
              path="/have-read"
              element={<CategoryPage category="Have Read" />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
