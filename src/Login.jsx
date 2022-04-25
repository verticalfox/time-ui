import React, { createContext, useState } from "react";
import "./Login.css";
import axios from "axios";
import { Navigate} from "react-router-dom";
import { MyContext } from "./App";
const intialData= Object.freeze(
{
	username:"",
	password:""	,

}
);

function Login() {
	localStorage.clear();
	const [currentFormData , setFormData]= useState(intialData)
	const [success , setSuccess] =useState(false);
	const [message , setMessage] = useState("you are not logged in..");
	const [userRole , setUserRole] = useState("none");
	const [name , setName] = useState("xyz");
	const handleChange=(e) => {
		setFormData({
		 ...currentFormData,
		 [e.target.name] : e.target.value.trim()
		});

	}
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(currentFormData);
		// console.log("you are here !")

		axios.post('http://localhost:3000/users/sign_in', {
			"user": {
				"email" : currentFormData.username,
				"password" : currentFormData.password
			}
		})
			  .then(function (response) {
				console.log(response.data);
				setMessage(response.data.message);
				setUserRole(response.data.user.role);
				setName(response.data.user.name);
			
			  })
			  .catch(function (error) {
				console.log(error);
			  });
			  setSuccess(true);
			
	}
	return (
	<>
		{localStorage.setItem('user_role',userRole)}
		{localStorage.setItem('user_name',name)}
	{success && (message==="You are logged in.")? (<div><Navigate to="/" /></div>)
	: (	<div className="container">

	<div className="screen">
		<div className="screen__content">
			<form className="login" method="post">
				
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input id="username" name="username" type="email" className="login__input" onChange={ handleChange} placeholder="User name / Email" required/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input id="password" name="password"  type="password" className="login__input"  onChange={handleChange} placeholder="Password"  required/>
				</div>
				<button className="button login__submit" onClick={handleSubmit}>
					<span className="button__text">Log In</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>
			</form>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>
	</div>
</div>)}
</>
);
	
}
export default Login;