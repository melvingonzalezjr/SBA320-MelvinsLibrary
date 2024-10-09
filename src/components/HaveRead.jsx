import {apiKey} from '../api/fetchBooks';
import { userId } from '../api/fetchBooks';
import React, { useEffect, useState } from 'react';

export default function HaveRead() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`https://www.googleapis.com/books/v1/users/${userId}/bookshelves/4/volumes?key=${apiKey}`);
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
      <h2>Have Read</h2>
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

