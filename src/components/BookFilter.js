import React from 'react';

const BookFilter = ({ genres, authors, onSelectGenre, onSelectAuthor }) => {
  return (
    <div>
      <select onChange={onSelectGenre}>
        <option value="">Select Genre</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
      <select onChange={onSelectAuthor}>
        <option value="">Select Author</option>
        {authors.map(author => (
          <option key={author} value={author}>{author}</option>
        ))}
      </select>
    </div>
  );
};

export default BookFilter;
