import React from 'react';
import ReactDOM from 'react-dom/client';
import Video from './Components/Video';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Video />
  </React.StrictMode>
);