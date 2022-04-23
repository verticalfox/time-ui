import React, { useState, useEffect, useLayoutEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { getRequest, postRequest } from "../utils/http";




const initialFormData = Object.freeze({
  name: "",
  description: "",
  workspace_id : "50dcdbab-61df-4713-a4a8-6eaa68a46614"
});

function CreateProject(props) {
  const [formData, updateFormData] = useState(initialFormData); 

  const [workspace, setWorkspace] = useState([]);

  useLayoutEffect(() => {
    //fetch workspace_id here ..
    getRequest({
      url: `/workspaces`,
    })
    .then(function (response) {
      console.log("you are here ")
      setWorkspace(response.data.workspace);
      console.log(workspace[0].id);
    })
  }, );
 
 
 
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
    postRequest({
      url:`/projects`,
      data: formData
    })
    .then(function(response) {
      console.log("successfully added project entry !");
      // window.location.reload(true);
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


















