import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Collection from './Pages/Collection';


export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Collection" element={<Collection />} />
        </Routes>
    </Router>
  );
}
