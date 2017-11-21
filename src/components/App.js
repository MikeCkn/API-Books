import React, { Component } from 'react';
import {FormAddBook, CardBook} from './Book';
import 'animate.css';


class App extends Component {

//Initialize state
    state = {
        books: []
    }

//Request from DB
    componentDidMount() {
        fetch('http://localhost:3015')
            .then(res => res.json())
            .then(body => {
                this.setState({
                     books: body
                })
            })
            .catch(err => {
                throw err
            })
    }

    render() {
        return (
          <div className="container-fluid">
            <FormAddBook action="http://localhost:3015/add"/>
                <div className="alignBooksDiv row">{this.state.books.map((item, index) => {
                    return  <CardBook data={item} key={index}/>
                })}
                </div>
          </div>
        );
    }
}

export default App;
