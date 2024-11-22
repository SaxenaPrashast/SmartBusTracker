// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Smart Bus Management</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/tracking">Track Bus</Link></li>
      <li><Link to="/stops">Stop Timings</Link></li>
      <li><Link to="/admin">Admin</Link></li>
    </ul>
  </nav>
);

export default Navbar;
