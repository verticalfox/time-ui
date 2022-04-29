import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { patchRequest } from "../utils/http";
import { Navigate } from "react-router";

function EditTask(props) {

  const [taskNameValue, setTaskNameValue] = useState(props.task_title);
  const [taskDescriptionValue, setTaskDescriptionValue] = useState(props.task_description);
  const [dummyState ,setdummyState] = useState(false);
  var initialFormData = {
    title: taskNameValue,
    description: taskDescriptionValue
  }
  const [formData, updateFormData] = useState(initialFormData);
  const handleChange = (e) => {
    if (e.target.id === "title") {
      setTaskNameValue(e.target.value);
    }
    if (e.target.id === "description") {
      setTaskDescriptionValue(e.target.value);
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
    console.log("this is task id through props:" + props.task_id);
    // ... submit to API 
    patchRequest({
      url: `tasks/${props.task_id}`,
      data: {
        "task": {
          "title": formData.title,
          "description": formData.description,
        }
      }
    }).then(res => {console.log("task updated succesfully !");props.toggle(!props.isOpen); setdummyState(!dummyState)});

  };

  return (
    <div color="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md">
      <Form action="/" method="POST">
        <div className="modal-input">
          {/* <div > */}
          <FormGroup>
            <Label for="title">
              Task Name :
            </Label>
            <Input
              id="title"
              name="title"
              value={taskNameValue}
              placeholder="enter task title..."
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="text">
              Task Description :
            </Label>
            <Input
              id="description"
              name="description"
              type="textarea"
              value={taskDescriptionValue}
              placeholder="enter detail description of task.."
              onChange={handleChange}
            />
          </FormGroup>
  
            <Button onClick={handleSubmit} type="submit">
              Save
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={`/tasks`} className="btn btn-primary" onClick={()=>{ props.toggle(!props.isOpen)}}>Cancel </Link>
         
        </div>
      </Form>
    </div>
  );
}

export default EditTask;


















