import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CreateWorkspace from '../CreateWorkspace';
class WorkspaceModal extends React.Component {
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

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} fade={false}  backdrop={false}>
          <ModalHeader toggle={this.toggle}>New workspace</ModalHeader>
            <CreateWorkspace/>
        </Modal>
      </div>
    );
  }
}

export default WorkspaceModal;