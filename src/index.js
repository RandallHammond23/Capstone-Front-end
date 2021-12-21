import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Loader } from "@googlemaps/js-api-loader"


const jsxElement = <h1>Our React App</h1>;
console.log(jsxElement);
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


