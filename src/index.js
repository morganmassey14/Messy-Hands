import React from 'react';
import ReactDOM from 'react-dom';
import { MessyHands } from './components/MessyHands';
import { BrowserRouter as Router } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import "./styles/Custom.scss"

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <MessyHands />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
