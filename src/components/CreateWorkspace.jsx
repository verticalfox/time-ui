import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { postRequest } from "../utils/http";
const initialFormData = Object.freeze({
  name: "",
});

function CreateWorkspace(props) {
  const [formData, updateFormData] = useState(initialFormData);
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(formData);
    postRequest({
      url: `/workspaces`,
      data: formData,
    })
      .then(function (response) {
        // console.log("successfully added workspace entry !");
        props.toggle(!props.isOpen);
        window.alert("new workspace created successfully !!");
      });

  };
  return (
    <div color="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md">
      <Form action="/" method="POST">
        <div className="modal-input">
          <FormGroup>
            <Label for="name">
              Workspace Name :
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="enter workspace title..."
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
          <Button onClick={handleSubmit} type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>

  );
}

export default CreateWorkspace;


















