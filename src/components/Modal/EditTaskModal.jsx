import React from 'react';
import { Button, Modal, ModalHeader } from 'reactstrap';
import EditTask from '../../pages/create/EditTask.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
class EditTaskModal extends React.Component {
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
    // console.log("edit task modal | task__id:" + this.props.task__id);
    return (
      <>
        <Button color="edit-btn" onClick={this.toggle}><FontAwesomeIcon icon={faPencil} className="mr-2" />{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={`shadow-1 ${this.props.className}`} fade={false} backdrop={false}>
          <ModalHeader toggle={this.toggle}>Edit task</ModalHeader>
          <EditTask  isOpen={this.state.modal} toggle={this.toggle} task_title={this.props.task__title} task_description={this.props.task__description} task_id={this.props.task__id} />
        </Modal>
      </>
    );
  }
}

export default EditTaskModal;