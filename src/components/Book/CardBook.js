import React, {Component} from 'react';
import {Button, Modal, FormControl, ControlLabel} from 'react-bootstrap';

class CardBook extends Component {

//Initialize states
constructor(props) {
    super(props);
    this.state = {
        books: [],
        showModal: false
    };
}
//Function open modal
    openModal = () => {
        this.setState({showModal: true})
    }
//Function close modal
    closeModal = () => {
      this.setState({showModal: false})
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
    return  <div className="cardBookDiv animated slideInUp col-md-2" key={item._id}>
                <ul className="listBooks">
                    <li className="dateBook">{item.release_date}</li>
                    <li className="titleBook">{item.title}</li>
                    <li className="authorBook">{item.author}</li>
                    <li className="pagesBook">{item.pages} pages</li>

                </ul>
                <hr/>
                <div className="row">
                    <a className="updateLink col-md-6" >
                        <Button className="updateButton" bsStyle="warning" onClick={this.openModal}>Update</Button>
                    </a>
                    <a className="deleteLink col-md-6" href={`http://localhost:3015/delete/${item._id}`}>
                        <Button className="deleteButton" type="submit" bsStyle="danger">Delete</Button>
                    </a>
                </div>
                <Modal className="animated slideInUp" show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Updating Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form method="POST" action={`http://localhost:3015/update/${item._id}`}>
                            <ControlLabel>Title</ControlLabel>
                            <FormControl type="text" name="title" placeholder={item.title}></FormControl><br/>
                            <ControlLabel>Author</ControlLabel>
                            <FormControl type="text" name="author" placeholder={item.author}></FormControl><br/>
                            <ControlLabel>Date of release</ControlLabel>
                            <FormControl type="text" name="release_date" placeholder={item.release_date}></FormControl><br/>
                            <ControlLabel>Number of pages</ControlLabel>
                            <FormControl type="text" name="pages" placeholder={item.pages}></FormControl><br/>
                            <Button className="updateButton" bsStyle="warning" type="submit">SAVE</Button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        })}
</div>
)}
}

export default CardBook
