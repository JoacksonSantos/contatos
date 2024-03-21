import React from 'react';

import{ToastContainer} from "react-toastify";
import {Switch} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
const App=() => {
  return (
    <div className="App">
       <ToastContainer/>
       <Navbar />
       <h1>Contatos</h1>
        
    </div>
  );
}

export default App;
