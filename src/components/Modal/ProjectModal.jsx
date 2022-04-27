import React from 'react';
import { Button, Modal, ModalHeader} from 'reactstrap';
import CreateProject from '../CreateProject'
class ProjectModal extends React.Component {
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
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} fade={false} backdrop={false}>
          <ModalHeader toggle={this.toggle}>New Project</ModalHeader>
          <CreateProject project_name={this.props.project__name} project_description={this.props.project__description} />
        </Modal>
      </div>
    );
  }
}

export default ProjectModal;