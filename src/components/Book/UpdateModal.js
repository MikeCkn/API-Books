import React, {Component} from 'react';
import Modal from 'react-bootstrap-modal';
 
class UpdateModal extends Component {
 
  closeModal = () => {
      this.setState({open: false})
    }

  openModal = () => {
        this.setState({open: true})
    }

  render(){
    return (
      <div>
        <button type='button' onClick={this.openModal}>Launch modal</button>
 
        <Modal show={this.openModal} onHide={this.closeModal} aria-labelledby="ModalHeader">
          <Modal.Header closeButton>
            <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Some Content here</p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
            <button className='btn btn-primary' onClick={this.closeModal}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
 
export default UpdateModal