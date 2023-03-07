import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './html.css';
import App from './App';

const rootElement = document.getElementById('myroom');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);