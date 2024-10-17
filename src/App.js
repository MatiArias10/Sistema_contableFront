// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Asegúrate de que este archivo exista
import LibroDiarioPage from './pages/LibroDiarioPage'; // Asegúrate de que este archivo exista
import LibroMayorPage from './pages/LibroMayorPage'; // Asegúrate de que este archivo exista

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/libro-diario" element={<LibroDiarioPage />} />
          <Route path="/libro-mayor" element={<LibroMayorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
