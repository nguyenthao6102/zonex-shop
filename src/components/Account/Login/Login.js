import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import usersApi from "../../../api/usersApi";
import { setAuth } from "../../../redux/auth/authActions";
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

	const fetchUser = async () => {
		try {
			let params = {
				userName: userName,
				password: password,
			};
			const response = await usersApi.get(params);
			if (response[0]) {
				dispatch(setAuth(response[0]));
				history.goBack();
			} else {
				setLoginFailed(true);
			}
		} catch (error) {
			console.log("Failed to fetch users");
		}
	};

	const onSubmitSignIn = (e) => {
		e.preventDefault();
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
