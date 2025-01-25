import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    {/* <Route path="about" element={<About />} /> */}
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);