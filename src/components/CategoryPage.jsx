import React, { useEffect, useState } from 'react';
import BookList from './BookList';
import { fetchBooks } from '../api/fetchBooks';

const CategoryPage = ({ category }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const result = await fetchBooks(category);
      setBooks(result);
    };
    loadBooks();
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      <BookList books={books} />
    </div>
  );
};

export default CategoryPage;
