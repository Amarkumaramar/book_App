import React from 'react';

const BookDetail = ({ book }) => {
  return (
    <div>
      <img src={book.coverImage} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.rating}</p>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetail;
