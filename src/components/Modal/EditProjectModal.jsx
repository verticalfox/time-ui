import React from 'react';
import { Button, Modal, ModalHeader } from 'reactstrap';
import EditProject from '../EditProject'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
class EditProjectModal extends React.Component {
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
        <Button color="primary" onClick={this.toggle}><FontAwesomeIcon icon={faPencil} className="mr-2" />{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} fade={false} backdrop={false}>
          <ModalHeader toggle={this.toggle}>Edit Project</ModalHeader>
          <EditProject project_name={this.props.project__name} project_description={this.props.project__description} project_id={this.props.project__id} />
        </Modal>
      </>
    );
  }
}

export default EditProjectModal;