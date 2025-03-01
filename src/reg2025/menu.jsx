// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#e9ecef' }}>
    <Link to="/annonces-par-region" style={{ textDecoration: 'none', color: '#007bff' }}>
      Consulter annonces par région
    </Link>
    <Link to="/ajouter-annonce" style={{ textDecoration: 'none', color: '#007bff' }}>
      Ajouter annonce
    </Link>
    <Link to="/authentification" style={{ textDecoration: 'none', color: '#007bff' }}>
      Authentification
    </Link>
  </nav>
);

export default Menu;