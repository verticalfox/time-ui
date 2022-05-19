import React, { useState } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import axios from "axios";
const initialFormData = Object.freeze({
  user_name: "",
  email_id: "",
  phone: "",
  password: "",
  role: ""
});
function CreateUser(props) {
  const [formData, updateFormData] = useState(initialFormData);
  const [refresh , setRefresh] = useState(false);
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(formData);
    axios.post('http://localhost:3000/users', {
      "user": {
        'name': formData.user_name,
        'email': formData.email_id,
        'mobile_number': formData.phone,
        'password': formData.password,
        'role': formData.role
      }
    })
      .then(function (response) {
        // console.log(response);
        props.toggle(!props.isOpen);
        setRefresh(!refresh);
        window.alert("new user created successfully !!");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div color="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded shadow-1"
      expand="md">
      <Form action="/" method="POST">
        <div className="modal-input">
          <FormGroup>
            Name :
            <Input
              id="user_name"
              name="user_name"
              placeholder="enter your name..."
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            Email :
            <Input
              id="email_id"
              name="email_id"
              placeholder="abc@xyz.com"
              type="text"
              onChange={handleChange}
            >
            </Input>
          </FormGroup>
          <FormGroup>
            Password :
            <Input
              id="password"
              name="password"
              placeholder="password should be minimum of 6 letter"
              type="password"
              onChange={handleChange}
            >
            </Input>
          </FormGroup>
          <FormGroup>
            Phone :
            <Input
              id="phone"
              name="phone"
              placeholder="+91 0000111100"
              type="text"
              onChange={handleChange}
            >
            </Input>
          </FormGroup>
          <FormGroup>
            Role :
            <Input
              id="role"
              name="role"
              placeholder="enter role (example : user,admin ..etc)"
              type="text"
              onChange={handleChange}
            >
            </Input>
          </FormGroup>
          <Button onClick={handleSubmit} type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateUser;