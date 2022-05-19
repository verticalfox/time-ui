import React, { useState} from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { patchRequest } from "../../utils/http";

function EditUser(props) {
  var initialFormData={
    name:props.user_name,
    email:props.user_email,
    mobileNumber:props.user_mobile_number,
    role:props.user_role
  }
  const [formData, updateFormData] = useState(initialFormData);
  const [refresh , setRefresh] = useState(false);
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    patchRequest({
      url : `users/${props.user_id}`,
      data: {
        "user": {
          "name":formData.name,
          "email": formData.email,
          "mobile_number" : formData.mobileNumber,
          "role" : formData.role,
        }
      }
    }).then(res =>{ 
      // console.log("user information updated successfully !!");
      props.toggle(!props.isOpen);
      setRefresh(!refresh);
      window.location.reload();
    });
  };
  return (
    <div color="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded shadow-1" 
      expand="md">
      <Form action="/" method="POST">
        <div className="modal-input">
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
            <Button onClick={handleSubmit} type="submit">Save</Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={`/users`}className="btn btn-light"  onClick={()=>{ props.toggle(!props.isOpen)}}>Cancel </Link>
        </div>
      </Form>
    </div>
  );
}

export default EditUser;


















