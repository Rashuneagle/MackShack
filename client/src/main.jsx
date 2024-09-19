import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Adjust this path if your `App.jsx` is elsewhere
import './index.css'; // Optional: Your global CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
