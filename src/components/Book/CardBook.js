import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class CardBook extends Component {

    state = {
        books: [],
        open: false
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
                    <li className="dateBook">{item.release_date}</li>
                    <li className="titleBook">{item.title}</li>
                    <li className="authorBook">{item.author}</li>
                    <li className="pagesBook">{item.pages} pages</li>
                </ul>
                <hr/>
                <div className="row">
                    <a className="updateLink col-md-6" href={`http://localhost:3015/update/${item._id}`}>
                        <Button className="updateButton" type="submit" bsStyle="warning">Update</Button>
                    </a>
                    <a className="deleteLink col-md-6" href={`http://localhost:3015/delete/${item._id}`}>
                        <Button className="deleteButton" type="submit" bsStyle="danger">Delete</Button>
                    </a>   
                </div>
            </div>
        })}
</div>
)}
}

export default CardBook
