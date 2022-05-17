import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Router from './utils/Routing';

const apiUrl = `http://localhost:8080`;

class App extends Component {
  render() {
    return (
        <Router />
    );
  }
}

export default App;
