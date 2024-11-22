// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tracking from './pages/Tracking';
import Stops from './pages/Stops';
import Admin from './pages/Admin';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/stops" element={<Stops />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </Router>
);

export default App;
