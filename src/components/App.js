import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';

import {CardBook, FormAddBook} from './Book';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <FormAddBook/>
        <CardBook/>
      </div>
    );
  }
}

export default App;
