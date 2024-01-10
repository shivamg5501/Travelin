import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listing from './components/Listing';
import DetailView from './components/DetailView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/listing/:id" element={<DetailView />} />
      </Routes>
    </Router>
  );
};

export default App;
