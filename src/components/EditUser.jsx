import React, { useState} from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const initialFormData = Object.freeze({
  name: "",
  description: "",
});

function EditUser(props) {
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    if(e.target.id === "name") {
      setName(e.target.value);
    }
    if(e.target.id === "email") {
      setEmail(e.target.value);
    }
    if(e.target.id === "phone") {
      setMobileNumber(e.target.value);
    }
    if(e.target.id === "role") {
      setRole(e.target.value);
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
    axios.patch(`http://localhost:3000/api/v1/user/${props.user_id}`, {
    "project": {
        "name":formData.name,
        "email": formData.email,
        "mobile_number" : formData.mobileNumber,
        "role" : formData.role,
        // "workspace_id":"50dcdbab-61df-4713-a4a8-6eaa68a46614"
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

     const [name , setName] = useState(props.user_name);
     const [email , setEmail] = useState(props.user_email);
     const [mobileNumber , setMobileNumber] = useState(props.user_mobile_number);
     const [role , setRole] = useState(props.user_role);

  return (
    <div color="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md">
      <Form action="/" method="POST">
        <div className="modal-input">
        {/* <div > */}
          <FormGroup>
            <Label for="name">
               Name : 
            </Label>
            <Input
              id="name"
              name="name"
              value={name}
              placeholder="enter name..."
              type="text"
              onChange={handleChange}
            />
          </FormGroup>



          <FormGroup>
            <Label for="email">
              email:
            </Label>
            <Input
              id="email"
              name="email"
              value={email}
              placeholder="enter email..."
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">
             phone:
            </Label>
            <Input
              id="phone"
              name="phone"
              value={mobileNumber}
              placeholder="enter phone..."
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="role">
              role :
            </Label>
            <Input
              id="role"
              name="role"
              value={role}
              placeholder="enter role..."
              type="text"
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

export default EditUser;


















