import React from 'react';
import { Button, Modal, ModalHeader } from 'reactstrap';
import CreateTask from './CreateTask'
class TaskModal extends React.Component {
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
      // console.log("this is passed prop id"+ this.props.id)
    return (
      <div>
        <Button color="secondary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={`shadow-1 ${this.props.className}`} fade={false}  backdrop={false}>
          <ModalHeader toggle={this.toggle}>New Task</ModalHeader>
            <CreateTask isOpen={this.state.modal} toggle={this.toggle} projectId={this.props.id}/>          
        </Modal>
      </div>
    );
  }
}

export default TaskModal;