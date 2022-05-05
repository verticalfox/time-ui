import React, { useState} from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { postRequest } from "../utils/http";
import { useWorkspaceContext } from "../context/WorkspaceContext";
const initialFormData = Object.freeze({
  name: "",
  description: "",
  workspace_id : ""
});
function CreateProject(props) {
  const [formData, updateFormData] = useState(initialFormData);
  const{workspaceId ,settingWorkspaceId} = useWorkspaceContext();
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      workspace_id:workspaceId,
      [e.target.name]: e.target.value.trim()
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(formData);
    postRequest({
      url: `/projects`,
      data: formData
    })
      .then(function (response) {
        // console.log("successfully added project entry !");
        props.toggle(!props.isOpen);
        window.alert("new project created successfully !!");
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
              placeholder="enter detail description of project.."
              onChange={handleChange}
            />
          </FormGroup>
          <span style={{ backgroundColor: "lightblue" }}>
            <Button onClick={handleSubmit} type="submit">
              Submit
            </Button>
          </span>
        </div>
      </Form>
    </div>
  );
}

export default CreateProject;


















