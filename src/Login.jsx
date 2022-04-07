import React, { useState } from "react"
import "./Login.css"
import './App.css';
var verified = false;
function Login() {
	const [isLoggedIn, setLoginState] = useState(false);
	verified = isLoggedIn;
	function logged() {
		setLoginState(() => {
			isLoggedIn = true;
			console.log(verified);
			verified = isLoggedIn;
			console.log(verified);
		});

	}
	console.log(verified);
	return (<div className="container">
		<div className="screen">
			<div className="screen__content">
				<form className="login">
					<div className="login__field">
						<i className="login__icon fas fa-user"></i>
						<input type="text" className="login__input" placeholder="User name / Email" />
					</div>
					<div className="login__field">
						<i className="login__icon fas fa-lock"></i>
						<input type="password" className="login__input" placeholder="Password" />
					</div>
					<button className="button login__submit" onClick={logged}>
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
	</div>);

}
export default Login;
export { verified };