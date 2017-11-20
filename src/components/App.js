import React, { Component } from 'react';
import 'animate.css';

import {CardBook, FormAddBook} from './Book';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <FormAddBook/>
        <CardBook/>
      </div>
    );
  }
}

export default App;
