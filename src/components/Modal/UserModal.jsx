import React from 'react';
import { Button, Modal, ModalHeader} from 'reactstrap';
import CreateUser from '../CreateUser'
class UserModal extends React.Component {
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
        <Modal isOpen={this.state.modal} toggle={this.toggle} className= {` shadow-1 ${this.props.className}`} fade={false}  backdrop={false}>
          <ModalHeader toggle={this.toggle}>New User</ModalHeader>
            <CreateUser isOpen={this.state.modal} toggle={this.toggle}/>
        </Modal>
      </div>
    );
  }
}

export default UserModal;