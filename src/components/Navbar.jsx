import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul className='navLinks'>
        <li><Link to="/" className='link'>Favorites</Link></li>
        <li><Link to="/reading-now" className='link'>Reading Now</Link></li>
        <li><Link to="/to-read" className='link'>To Read</Link></li>
        <li><Link to="/have-read" className='link'>Have Read</Link></li>
      </ul>
    </nav>
  );
};


