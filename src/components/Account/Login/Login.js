import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUser } from "../../../redux/user/userActions";
import "./Login.scss";

function Login({ tab, onTabClick }) {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [loginFailed, setLoginFailed] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();

	const onUserNameChange = (e) => {
		setUserName(e.target.value);
		setLoginFailed(false);
	};
	const onPasswordChange = (e) => {
		setPassword(e.target.value);
		setLoginFailed(false);
	};

	const fetchUser = () => {
		axios
			.get(
				`https://zonex-fake.herokuapp.com/api/users?userName=${userName}&password=${password}`
			)
			.then(function (response) {
				// handle success
				if (response.data[0]) {
					dispatch(setUser(response.data[0]));
					history.push("/cart");
				} else {
					setLoginFailed(true);
				}
			})
			.catch((err) => {
				console.log("Error", err);
			});
	};

	const onSubmitSignIn = (e) => {
		e.preventDefault();
		console.log(userName, password);
		fetchUser();
	};

	return (
		<>
			<div
				className={
					tab === 1
						? "account-item account-login active-content"
						: "account-item account-login"
				}
			>
				<form className="account-form" onSubmit={onSubmitSignIn}>
					<input
						type="text"
						name="username"
						value={userName}
						onChange={onUserNameChange}
						placeholder="User Name"
						className="account-form__username"
						required
					/>
					<input
						type="password"
						name="password"
						value={password}
						onChange={onPasswordChange}
						placeholder="Password"
						className="account-form__password"
						required
					/>
					<input
						type="submit"
						value="sign in"
						className="account-form__submit"
					/>
				</form>
				<button onClick={() => onTabClick(2)}>create an account</button>
				{loginFailed ? (
					<div className="login-wrong">Wrong username or password</div>
				) : undefined}
			</div>
		</>
	);
}

export default Login;
