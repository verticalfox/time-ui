import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { patchRequest } from "../../utils/http";
import { useWorkspaceContext } from "../../context/WorkspaceContext";
var initialFormData = Object.freeze({
  name: "",
  description: "",
  workspace_id: ""
});
function EditProject(props) {

  const { workspaceId, settingWorkspaceId } = useWorkspaceContext();
  const [projectNameValue, setProjectNameValue] = useState(props.project_name);
  const [projectDescriptionValue, setProjectDescriptionValue] = useState(props.project_description);
  initialFormData = {
    name: projectNameValue,
    description: projectDescriptionValue,
    workspace_id: ""
  }
  const [formData, updateFormData] = useState(initialFormData);
  const handleChange = (e) => {
    if (e.target.id === "name") {
      setProjectNameValue(e.target.value);
    }
    if (e.target.id === "description") {
      setProjectDescriptionValue(e.target.value);
    }
    updateFormData({
      ...formData,
      workspace_id: workspaceId,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(formData);
    patchRequest(
      {
        url: `projects/${props.project_id}`,
        data: {
          "project": {
            "name": formData.name,
            "description": formData.description,
            "workspace_id": formData.workspace_id
          }
        }
      }
    ).then(response => {
      //  console.log(response);
        props.toggle(!props.isOpen); 
        window.location.reload();
      });
  };

  return (
    <div color="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded shadow-1"
      expand="md">
      <Form action="/" method="POST">
        <div className="modal-input">
          {/* <div > */}
          <FormGroup>
            <Label for="name">
              Project Name :
            </Label>
            <Input
              id="name"
              name="name"
              value={projectNameValue}
              placeholder="enter project title..."
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="text">
              Project Description :
            </Label>
            <Input
              id="description"
              name="description"
              type="textarea"
              value={projectDescriptionValue}
              placeholder="enter detail description of project.."
              onChange={handleChange}
            />
          </FormGroup>
          <Button onClick={handleSubmit} type="submit">Save</Button> &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={`/projects`} className="btn btn-light" onClick={() => { props.toggle(!props.isOpen) }}>Cancel </Link>
        </div>
      </Form>
    </div>
  );
}

export default EditProject;


















