import React from 'react';

const BookDetails = ({ book }) => {
  const { title, authors, imageLinks, description } = book.volumeInfo;
  
  return (
    <div className="book-card">
      <img src={imageLinks?.thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{authors ? authors.join(', ') : 'Unknown Author'}</p>
      <p>{description ? description.substring(0, 100) + '...' : 'No description available'}</p>
    </div>
  );
};

export default BookDetails;
