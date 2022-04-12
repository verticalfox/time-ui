import React ,{useState, useEffect}from "react";
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

        // let  flagCheck=true; //useState hook is needed : reminder ( taking break now !)
        const [flagCheck,setFlagCheck] = useState(false);
        const [formData, updateFormData] = useState(initialFormData);
        const [selectOptions , setOptions] = useState("dummy");
        useEffect(() => {
            axios.get(`http://localhost:3000/projects`, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
                .then(function (response) {
                   setOptions(response.data);
                     console.log(selectOptions[0].title);
                })
    
    
        }, []);
       
      
        const handleChange = (e) => {
         setFlagCheck(false);
         if(e.target.value==='') {
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
          // ... submit to API 
            axios.post('http://localhost:3000/tasks', {
            'title': formData.task_name,
            'description' : formData.task_desc,
            'time': parseInt(formData.time_taken),
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
            'projectAssigned' : formData.select_project,
            'projectId' : 999
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
   
        axios.post('http://localhost:3000/reports', {
            'name': formData.assigned_to,
            'totalhours' : formData.time_taken
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
        project 1
      </option>
      <option>
       project 2
      </option>
      <option>
       project 3
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
      invalid={flagCheck}
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
  <span style={{backgroundColor: "lightblue"}}>
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


//   <div color="light" class="navbar tracker-input">
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
