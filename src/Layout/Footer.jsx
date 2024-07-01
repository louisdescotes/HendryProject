import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <h1 className="text-title font-satoshi font-bold">Hendry</h1>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/Collection">Collection</Link>
      </div>
      <div>©2024</div>
    </footer>
  );
}
