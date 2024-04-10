import React, { useState, useEffect } from 'react';
import BookDetail from '../components/BookDetail';
import { useParams } from 'react-router-dom';
import { fetchBookById } from '../api/bookApi';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBookById(id).then(data => setBook(data));
  }, [id]);

  return (
    <div>
      {book ? <BookDetail book={book} /> : <p>Loading...</p>}
    </div>
  );
};

export default BookDetailPage;
