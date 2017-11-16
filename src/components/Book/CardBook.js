import React, {Component} from 'react';
import {bootstrap, Button} from 'react-bootstrap';

import Animate from 'animate.css';

class CardBook extends Component {

    state = {
        books: []
    }

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

<div className="alignBooksDiv row">{this.state.books.map(item => {
    return  <div className="cardBookDiv animated slideInLeft col-md-2" key={item._id}>
                <ul className="listBooks">
                    <li className="titleBook">{item.title}</li>
                    <li className="dateBook">{item.release_date}</li>
                    <li className="authorBook">{item.author}</li>
                    <li className="pagesBook">{item.pages} pages</li>
                </ul>
                <form className="formButton" action={`http://localhost:3015/${item._id}`} method="POST">
                    <Button className="updateButton" type="submit" bsStyle="warning">Update</Button>
                </form>
                <form action={`http://localhost:3015/delete/${item._id}`} method="POST">
                    <Button className="deleteButton" type="submit" bsStyle="danger">Delete</Button>
                </form>                
            </div>
        })}
</div>
)}
}

export default CardBook
