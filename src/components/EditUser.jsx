import React, { useState} from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { getRequest, patchRequest } from "../utils/http";
import { Navigate } from "react-router";

function EditUser(props) {
  // const [name , setName] = useState(props.user_name);
  // const [email , setEmail] = useState(props.user_email);
  // const [mobileNumber , setMobileNumber] = useState(props.user_mobile_number);
  // const [role , setRole] = useState(props.user_role);

  var initialFormData={
    name:props.user_name,
    email:props.user_email,
    mobileNumber:props.user_mobile_number,
    role:props.user_role
  }
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    // if(e.target.id === "name") {
    //   setName(e.target.value);
    // }
    // if(e.target.id === "email") {
    //   setEmail(e.target.value);
    // }
    // if(e.target.id === "phone") {
    //   setMobileNumber(e.target.value);
    // }
    // if(e.target.id === "role") {
    //   setRole(e.target.value);
    // }
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    //fetch workspace id here 

    // ... submit to API 
    patchRequest({
      url : `users/${props.user_id}`,
      data: {
        "project": {
          "name":formData.name,
          "email": formData.email,
          "mobile_number" : formData.mobileNumber,
          "role" : formData.role,
          // "workspace_id":"50dcdbab-61df-4713-a4a8-6eaa68a46614"
        }
      }
    }).then(res =>{ 
      console.log("user information updated successfully !!");
      props.toggle(!props.isOpen);
    });
    
//     axios.patch(`http://localhost:3000/api/v1/user/${props.user_id}`, {
//     "project": {
//         "name":formData.name,
//         "email": formData.email,
//         "mobile_number" : formData.mobileNumber,
//         "role" : formData.role,
//         // "workspace_id":"50dcdbab-61df-4713-a4a8-6eaa68a46614"
//     }
// })
//       .then(function (response) {
//         // console.log(response);
//             //  window.location.reload(true);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });


  };
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
              value={formData.name}
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
              value={formData.email}
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
              value={formData.mobileNumber}
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
              value={formData.role}
              placeholder="enter role..."
              type="text"
              onChange={handleChange}
            />
          </FormGroup>   

            <Button onClick={handleSubmit} type="submit">
              Save
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={`/users`}className="btn btn-primary"  onClick={()=>{ props.toggle(!props.isOpen)}}>Cancel </Link>

        </div>
      </Form>
    </div>
  );
}

export default EditUser;


















