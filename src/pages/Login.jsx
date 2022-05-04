import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { withoutAuthenticate } from "../Routes";
import paths from '../paths';
import { useUserContext } from "../context/UserContext";
const intialData= Object.freeze({
	email:"",
	password:""	,
});

const Login = () => {
	let navigate = useNavigate();
	const [currentFormData , setFormData]= useState(intialData)
	const { setUser } = useUserContext();
	const handleChange=(e) => {
		setFormData({
		 ...currentFormData,
		 [e.target.name] : e.target.value.trim()
		});
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:3000/users/sign_in', {
			"user": {
				"email" : currentFormData.email,
				"password" : currentFormData.password
			}
		}).then(function (response) {
			 console.log(response.data.message);
			 if(response.data.message === "Invalid email or password"){
				 navigate(paths.login);
				 window.alert("Oops ! looks like you have entered invalid credentials.")
			 } else {
				const { data, headers } = response;
				navigate(paths.home);
				setUser(data.user, headers.authorization);
				window.location.reload();
			 }
		}).catch(function (error) {
			console.log(error);
		});
	}

	return (
		<div className="container">
			<div className="screen">
				<div className="screen__content">
					<form className="login" method="post">
						
						<div className="login__field">
							<i className="login__icon fas fa-user"></i>
							<input id="email" name="email" type="email" className="login__input" onChange={ handleChange} placeholder="Email" required/>
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
		</div>
	);
};

export default withoutAuthenticate(Login);
