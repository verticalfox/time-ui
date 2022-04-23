import React, { useState} from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const initialFormData = Object.freeze({
  name: "",
  description: "",
});

function EditProject(props) {
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    if(e.target.id === "name") {
      setProjectNameValue(e.target.value);
    }
    if(e.target.id === "description") {
      setProjectDescriptionValue(e.target.value);
    }
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);

    //fetch workspace id here 

    // ... submit to API 
    axios.patch(`http://localhost:3000/api/v1/projects/${props.project_id}`, {
    "project": {
        "name":formData.name,
        "description": formData.description,
        "workspace_id":"50dcdbab-61df-4713-a4a8-6eaa68a46614"
    }
})
      .then(function (response) {
        // console.log(response);
            //  window.location.reload(true);
      })
      .catch(function (error) {
        console.log(error);
      });


  };
  const handleCancel = ()=> {
    // window.location.reload(true);
  }
  const [projectNameValue, setProjectNameValue] = useState(props.project_name);
  const [projectDescriptionValue, setProjectDescriptionValue] = useState(props.project_description);
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
          <span style={{ backgroundColor: "lightblue" }}>
            <Button onClick={handleSubmit} type="submit">
              Save
            </Button>
            <Link to={`/projects`}className="btn btn-primary"  onClick={()=>handleCancel()}>Cancel </Link>
          </span>

        </div>
      </Form>
    </div>

  );
}

export default EditProject;


















