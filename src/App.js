import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import './App.css';

import { getUsers } from './api';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount = async () => {
    const users = await getUsers();
    this.setState((state) => ({ users: users }));
  }

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users users={ users } />
        </div>
      </div>
    );
  }
}

export default App;
