import React, { useState} from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const initialFormData = Object.freeze({
  title: "",
  description: "",
});

function EditTask(props) {
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    if(e.target.id === "title") {
      setTaskNameValue(e.target.value);
    }
    if(e.target.id === "description") {
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
    axios.patch(`http://localhost:3000/api/v1/tasks/${props.task_id}`, {
    "task": {
        "title":formData.title,
        "description": formData.description,
        // "project_id":"53bf03f4-a5bd-4fea-b867-ffde17c64dde"
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
  const [taskNameValue, setTaskNameValue] = useState(props.task_title);
  const [taskDescriptionValue, setTaskDescriptionValue] = useState(props.task_description);
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
          <span style={{ backgroundColor: "lightblue" }}>
            <Button onClick={handleSubmit} type="submit">
              Save
            </Button>
            <Link to={`/tasks`}className="btn btn-primary"  onClick={()=>handleCancel()}>Cancel </Link>
          </span>

        </div>
      </Form>
    </div>

  );
}

export default EditTask;


















