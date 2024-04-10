import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import BookFilter from '../components/BookFilter';
import { fetchBooks } from '../api/bookApi';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');

  useEffect(() => {
    fetchBooks().then(data => {
      setBooks(data);
      const allGenres = data.map(book => book.genre);
      const uniqueGenres = Array.from(new Set(allGenres));
      setGenres(uniqueGenres);
      const allAuthors = data.map(book => book.author);
      const uniqueAuthors = Array.from(new Set(allAuthors));
      setAuthors(uniqueAuthors);
    });
  }, []);

  const handleGenreChange = event => {
    setSelectedGenre(event.target.value);
  };

  const handleAuthorChange = event => {
    setSelectedAuthor(event.target.value);
  };

  const filteredBooks = books.filter(book => {
    if (selectedGenre && selectedAuthor) {
      return book.genre === selectedGenre && book.author === selectedAuthor;
    } else if (selectedGenre) {
      return book.genre === selectedGenre;
    } else if (selectedAuthor) {
      return book.author === selectedAuthor;
    } else {
      return true;
    }
  });

  return (
    <div>
      <h1>Book Explorer</h1>
      <BookFilter
        genres={genres}
        authors={authors}
        onSelectGenre={handleGenreChange}
        onSelectAuthor={handleAuthorChange}
      />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default Home;
