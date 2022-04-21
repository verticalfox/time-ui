import React, { useState} from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
const initialFormData = Object.freeze({
  name: "",
  description: "",
});

function CreateProject(props) {
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    // ... submit to API 
    axios.post('http://localhost:3000/api/v1/projects', {
    "project": {
        "name":formData.name,
        "description": formData.description,
        "workspace_id":"b41e1eff-6884-42f1-9829-17578cb06dcb"
    }
})
      .then(function (response) {
        // console.log(response);
             window.location.reload(true);
      })
      .catch(function (error) {
        console.log(error);
      });

  };
  return (
    <div color="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
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


















