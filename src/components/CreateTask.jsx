import React, { useState } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { postRequest } from "../utils/http";

const initialFormData = Object.freeze({
  task_name: "",
  task_desc: "",
});
const CreateTask = (props) => {
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
    //here hit PUT api request.
    postRequest({
      url: `tasks`,
      data: {
        "task": {
          "title": formData.task_name,
          "description": formData.task_desc,
          "project_id": props.projectId
        }
      }
    }).then((response) => {
      console.log(response);
      props.toggle(!props.isOpen);
    });
    // console.log("this is project Id : "+props.projectId);
  };
  return (
    <div color="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md">
      <Form action="/" method="POST">
        <div className="modal-input">
          <FormGroup>
            Task :
            <Input
              id="task_name"
              name="task_name"
              placeholder="enter task name..."
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            Description :
            <Input
              id="task_desc"
              name="task_desc"
              placeholder="enter task description..."
              type="textarea"
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
export default CreateTask;