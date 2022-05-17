import React from 'react';
import { Button, Modal, ModalHeader } from 'reactstrap';
import EditUser from '../../pages/create/EditUser'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
class EditUserModal extends React.Component {
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
      <>
        <Button color="edit-btn" onClick={this.toggle}><FontAwesomeIcon icon={faPencil} className="mr-2" />{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={`shadow-1 ${this.props.className}`} fade={false} backdrop={false}>
          <ModalHeader toggle={this.toggle}>Edit user info </ModalHeader>
          <EditUser isOpen={this.state.modal} toggle={this.toggle}  user_name={this.props.user__name} user_email={this.props.user__email} user_id={this.props.user__id} user_mobile_number={this.props.user__mobile_number} user_role={this.props.user__role} />
        </Modal>
      </>
    );
  }
}

export default EditUserModal;