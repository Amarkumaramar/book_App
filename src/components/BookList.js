import React from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      {books.map(book => (
        <div key={book.id}>
          <img src={book.coverImage} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
