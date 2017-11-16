import React, {Component} from 'react';
import {bootstrap, Button, FormControl, ControlLabel} from 'react-bootstrap';
import Animate from 'animate.css';

class FormAddBook extends Component {
    render() {
        return (
                <div className="formDiv animated slideInDown">
                    <form method="POST" action="http://localhost:3015/add">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl type="text" name="title" placeholder="Harry Potter"></FormControl><br/>
                        <ControlLabel>Author</ControlLabel>
                        <FormControl type="text" name="author" placeholder="J.K Rowling"></FormControl><br/>
                        <ControlLabel>Date of release</ControlLabel>
                        <FormControl type="text" name="release_date" placeholder="2007"></FormControl><br/>
                        <ControlLabel>Number of pages</ControlLabel>
                        <FormControl type="text" name="pages" placeholder="450"></FormControl><br/>
                        <Button className="formAddButton" bsStyle="info" type="submit">ADD</Button>
                    </form>
                </div>
            );
        }
    }
    
export default FormAddBook;