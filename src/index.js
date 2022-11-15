import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

const dataPost = [
  { id: 1, text: 'Hey, why nobody loves me?' },
  { id: 2, text: 'Durov return wall' },
  { id: 3, text: 'Make America great again' },
  { id: 4, text: 'Thank God i\'m not a Muscovite' },
  { id: 5, text: 'Glory to Ukraine' },
]

root.render(
  <Router>
    <App dataPost={dataPost} />
  </Router>
);

reportWebVitals();
