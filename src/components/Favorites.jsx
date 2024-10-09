import React, { useEffect, useState } from 'react';
import {apiKey, userId} from '../api/fetchBooks'

export default function Favorites() {
  const [books, setBooks] = useState([]);

  // Fetch My Favorites in Library
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`https://www.googleapis.com/books/v1/users/${userId}/bookshelves/0/volumes?key=${apiKey}`);
        const data = await res.json();
        setBooks(data.items);
      } catch (err) {
        console.error('Error fetching books:', err);
      }
    };
    fetchBooks();
  }, []);
  
  return (
    <div>
      <h2>Favorites</h2>
      <div>
        {books && books.map((book) => (
          <div key={book.id}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
}


