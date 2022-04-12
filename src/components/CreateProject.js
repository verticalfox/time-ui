import React ,{useState, useEffect}from "react";
import { Table ,Form,FormGroup,Label,Input,FormText,Button} from "reactstrap";
import axios from "axios";


const initialFormData = Object.freeze({
    select_project:"",
    project_name: "",
    project_desc: "",
    assigned_to: "",
    time_taken: null
  });
  
function CreateProject() {

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
            axios.post('http://localhost:3000/projects', {
            'title': formData.project_name,
            'description' : formData.project_desc,
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
    <Label for="projectName">
      Project Name :
    </Label>

    <Input 
      id="project_name"
      name="project_name"
      placeholder="enter task title..."
      type="text"
      onChange={handleChange}
      invalid={flagCheck}
    />
 
  
  </FormGroup>
  <FormGroup>
    <Label for="text">
        Project Description :
    </Label>
    <Input
      id="project_desc"
      name="project_desc"
      type="textarea"
      placeholder="enter detail description of project.."
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="text">
        Project lead : 
    </Label>
    <Input
      id="assigned_to"
      name="assigned_to"
      type="text"
      placeholder="project assigned to.. "
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

  export default CreateProject;


















