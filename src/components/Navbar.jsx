import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Favorites</Link></li>
        <li><Link to="/reading-now">Reading Now</Link></li>
        <li><Link to="/to-read">To Read</Link></li>
        <li><Link to="/have-read">Have Read</Link></li>
      </ul>
    </nav>
  );
};


