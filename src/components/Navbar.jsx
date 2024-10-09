import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/reading-now">Reading Now</Link></li>
        <li><Link to="/to-read">To Read</Link></li>
        <li><Link to="/have-read">Have Read</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
