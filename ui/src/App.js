import React, { Component } from 'react';
import logo from './logo_donathor.png';
import axios from 'axios';
import './App.css';
import Wrapper from './utils/AuthWrapper';
import Router from './utils/Routing';

const apiUrl = `http://localhost:8080`;

class App extends Component {
  state = {
    users: []
  };

  async createUser() {
    await axios.get(apiUrl + '/user-create');
    this.loadUsers();
  }

  async loadUsers() {
    const res = await axios.get(apiUrl + '/users');
    this.setState({
      users: res.data
    });
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    return (
      <Wrapper>
        <Router />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* <button onClick={() => this.createUser()}>Create User</button>
            <p>Users list:</p>
            <ul>
              {this.state.users.map(user => (
                <li key={user._id}>id: {user._id}</li>
              ))}
            </ul> */}
          </header>
        </div>
      </Wrapper>
      
    );
  }
}

export default App;
