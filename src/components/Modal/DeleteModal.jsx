import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleDel() {
    this.props.delete(this.props.id);
    this.toggle();
  }

  render() {
    return (
      <>
        <Button color="primary" onClick={this.toggle}><FontAwesomeIcon icon={faTrash} className="mr-2" />{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} fade={false} backdrop={false}>
          <ModalBody toggle={this.toggle}>Are you sure, you want to delete this {this.props.label} ??</ModalBody>
          <ModalFooter>
            <Button onClick={() => { this.handleDel(); }}> Yes</Button>
            <Button color='danger' onClick={() => { this.toggle() }}> No</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default DeleteModal;