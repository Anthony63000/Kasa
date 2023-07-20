// Import des différents fichier externe

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import Logement from './pages/Lodging/Lodging';

// Déployer l'application

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/Kasa/' element={<Home />}></Route>
        <Route path='/Kasa/About' element={<About />}></Route>
        <Route path='/Kasa/*' element={<Error />}></Route>
        <Route path="/Kasa/Logement/:id" element={<Logement />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();
