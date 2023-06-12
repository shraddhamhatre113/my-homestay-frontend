import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.css';

import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "./App.css";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.js'

ReactDOM.createRoot(document.getElementsByTagName('body')[0]).render(



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
