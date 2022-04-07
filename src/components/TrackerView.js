import React from "react";
import { Table ,Form,FormGroup,Label,Input,FormText,Button} from "reactstrap";
function TrackerView() {
    return (
      <div  color="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md">
 <Form>
 <div className="tracker-input">
 <FormGroup>
    <Label for="selectProject">
      Select Project
    </Label>
    <Input
      id="select"
      name="select"
      type="select"
    >
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
    />
  </FormGroup>

  <Button>
    Submit
  </Button>
  </div>
</Form>
    </div>
  
    );
  }

  export default TrackerView;