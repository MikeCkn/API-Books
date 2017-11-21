import React, { Component } from 'react';
import {Button, Modal, FormControl, ControlLabel} from 'react-bootstrap';

class CardBook extends Component {

//Initialize state
    state = {
        showModal: false
    }
//Function to open modal
    openModal = () => {
        this.setState({showModal: true})
    }
//Function to close modal
    closeModal = () => {
      this.setState({showModal: false})
    }

    render() {
        return (
<div className="cardBookDiv animated slideInUp col-md-2">
                    <ul className="listBooks">
                        <li className="dateBook">{this.props.data.release_date}</li>
                        <li className="titleBook">{this.props.data.title}</li>
                        <li className="authorBook">{this.props.data.author}</li>
                        <li className="pagesBook">{this.props.data.pages} pages</li>
                    </ul>
                    <hr/>
                    <div className="row">
                        <a className="updateLink col-md-6" >
                            <Button className="updateButton" bsStyle="warning" onClick={this.openModal}>Update</Button>
                        </a>   
                            <Modal className="animated slideInDown" show={this.state.showModal} onHide={this.closeModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Updating Book</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form method="POST" action={`http://localhost:3015/update/${this.props.data._id}`}>
                                        <ControlLabel>Title</ControlLabel>
                                        <FormControl type="text" name="title" defaultValue={this.props.data.title}></FormControl><br/>
                                        <ControlLabel>Author</ControlLabel>
                                        <FormControl type="text" name="author" defaultValue={this.props.data.author}></FormControl><br/>
                                        <ControlLabel>Date of release</ControlLabel>
                                        <FormControl type="text" name="release_date" defaultValue={this.props.data.release_date}></FormControl><br/>
                                        <ControlLabel>Number of pages</ControlLabel>
                                        <FormControl type="text" name="pages" defaultValue={this.props.data.pages}></FormControl><br/>
                                        <Button className="updateButton" bsStyle="warning" type="submit">SAVE</Button>
                                    </form>
                                </Modal.Body>
                            </Modal>
                        <a className="deleteLink col-md-6" href={`http://localhost:3015/delete/${this.props.data._id}`}>
                            <Button className="deleteButton" type="submit" bsStyle="danger">Delete</Button>
                        </a>
                    </div>
                </div>
        );
    }
}

export default CardBook
