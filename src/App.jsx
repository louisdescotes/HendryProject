import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Collection from './Pages/Collection';
import ProductPage from './Pages/ProductPage';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/Pages/ProductPage/:name" element={<ProductPage />} />
        </Routes>
    </Router>
  );
}
