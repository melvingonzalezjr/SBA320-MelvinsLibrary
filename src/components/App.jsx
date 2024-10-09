import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import CategoryPage from './CategoryPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/favorites" element={<CategoryPage category="Favorites" />} />
        <Route path="/reading-now" element={<CategoryPage category="Reading Now" />} />
        <Route path="/to-read" element={<CategoryPage category="To Read" />} />
        <Route path="/have-read" element={<CategoryPage category="Have Read" />} />
      </Routes>
    </Router>
  );
}

export default App;
