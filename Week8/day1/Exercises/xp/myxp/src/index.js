import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import User from './User';
import reportWebVitals from './reportWebVitals';


      // ex 3
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//                                      ex 1
// // // without JSX
// const myElement = <h1>I Love JSX!</h1>;
//                                      ex 2
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
