import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Portfolio from './components/Portfolio.js';

function App() {
  return (
    <div className="App">
      <h2>index Page</h2>
      <Route component={Portfolio} path='/Portfolio' />
    </div>
  );
}

export default App;
