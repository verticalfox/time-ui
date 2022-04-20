import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";


const initialFormData = Object.freeze({
  select_project: "",
  task_name: "",
  task_desc: "",
  time_taken: null
});
const DropDown = (e) => {
  return (

    <option>

      {e.name}
      
    </option>

  );
}
const DropDown2 = (e) => {
  return (

    <option>

      {e.title}
      
    </option>

  );
}
function TrackerView() {
  const [flagCheck, setFlagCheck] = useState(false);//for form validation
  const [formData, updateFormData] = useState(initialFormData);
  const [selectProjectOption, setProjectOptions] = useState(["select Project"]);
  const [selectTaskOption, setTaskOptions] = useState(["task"]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/project`, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(function (response) {
        setProjectOptions(response.data.projects);
      });

      axios.get(`http://localhost:3000/api/v1/task`, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(function (response) {
          console.log('Task Data is', response.data.tasks);

          setTaskOptions(response.data.tasks);
          console.log(selectTaskOption);
        });

  }, []);


  const handleChange = (e) => {

    setFlagCheck(false);
    if (e.target.value === '') {
      setFlagCheck(true);
    }
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    axios.post('http://localhost:3000/api/v1/task', {
      "task": {
          "title":formData.task_name,
          "description": formData.task_desc,
          "project_id": 3  //this is dummy project ID ...remember to take it dyanamically.
      }
  })
        .then(function (response) {
          // console.log(response);
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
              {selectProjectOption.map(DropDown)}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="selectProject">
              Select task
            </Label>
            <Input
              id="select_task"
              name="select_task"
              type="select"
              onChange={handleChange}
            >
              {selectTaskOption.map(DropDown2)}
            </Input>
          </FormGroup>
          {/* <FormGroup>
            <Label for="taskName">
              Task
            </Label>

            <Input
              id="task_name"
              name="task_name"
              placeholder="enter task title..."
              type="text"
              onChange={handleChange}
              invalid={flagCheck}
            />
          </FormGroup> */}
          <FormGroup>
            <Label for="text">
             Description
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

export default TrackerView;




































//   bootstrap form dump code :


//   <div color="light" class="navbar modal-input">
// <form>
//     <div class="mb-3 ">
//         <label for="selectProject" class="form-label"> Select Project</label>
//     <select class="form-select" aria-label="Default select example">
//   <option selected>Open this select menu</option>
//   <option value="1">One</option>
//   <option value="2">Two</option>
//   <option value="3">Three</option>
// </select>
//     </div>


// <div class="mb-3">
//   <label for="exampleFormControlInput1" class="form-label">Task :</label>
//   <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
// </div>
// <div class="mb-3">
//   <label for="exampleFormControlTextarea1" class="form-label">Task description :</label>
//   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
// </div>

// <div class="mb-3">
//   <label for="exampleFormControlInput1" class="form-label">Assigned to :</label>
//   <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
// </div>
// <div class="mb-3">
//   <label for="exampleFormControlInput1" class="form-label">Total Time Taken :</label>
//   <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
// </div>

// </form>

// </div>
