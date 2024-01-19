import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Assuming App.jsx is in the same directory
import './index.css';
import { BrowserRouter } from 'react-router-dom';  // Correct import for BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
