import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Router from './utils/Routing';
import Wrapper from './utils/AuthWrapper';

const apiUrl = `http://localhost:8080`;

class App extends Component {
  render() {
    return (
        <Wrapper>
          <Router />
        </Wrapper>
    );
  }
}

export default App;
