import React ,{useState, useLayoutEffect, useEffect}from "react";
import { Table ,Form,FormGroup,Label,Input,FormText,Button} from "reactstrap";
import axios from "axios";

const initialFormData = Object.freeze({
    select_project:"",
    task_name: "",
    task_desc: "",
    assigned_to: "",
    time_taken: null
  });
  
function TrackerView() {


        const [formData, updateFormData] = React.useState(initialFormData);

        

        const handleChange = (e) => {
          updateFormData({
            ...formData,
      
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault()
          console.log(formData);
          // ... submit to API 
            axios.post('http://localhost:3000/tasks', {
            'title': formData.task_name,
            'description' : formData.task_desc,
            'time   ': parseInt(formData.time_taken),
            'projectId' :999
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    
          axios.post('http://localhost:3000/users', {
            'name': formData.assigned_to,
            'project assigned' : formData.select_project,
            'projectId' : 999
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        };
    
    
   

    return (
      <div  color="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md">
 <Form action="/" method="POST">
 <div className="tracker-input">
 <FormGroup>
    <Label for="selectProject">
      Select Project
    </Label>
    <Input
      id="select_project"
      name="select_project"
      type="select"
      onChange={handleChange}
    >
        <option>
         select project 
      </option>
      <option>
         Project 1
      </option>
      <option>
       Project 2
      </option>
      <option>
       Project 3
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="taskName">
      Task 
    </Label>

    <Input 
      id="task_name"
      name="task_name"
      placeholder="enter task title..."
      type="text"
      onChange={handleChange}
    />
 
  
  </FormGroup>
  <FormGroup>
    <Label for="text">
        Task Description
    </Label>
    <Input
      id="task_desc"
      name="task_desc"
      type="textarea"
      placeholder="enter detail description of task.."
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="text">
        Assignee 
    </Label>
    <Input
      id="assigned_to"
      name="assigned_to"
      type="text"
      placeholder="task assigned to : "
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="taskName">
      Time 
    </Label>

    <Input 
      id="time_taken"
      name="time_taken"
      placeholder="total time taken"
      type="input"
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

  export default TrackerView;