import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
    </Routes>
    </Router>
  </React.StrictMode>
);
