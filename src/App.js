import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookDetailPage from './pages/BookDetailPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/book/:id" component={BookDetailPage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
