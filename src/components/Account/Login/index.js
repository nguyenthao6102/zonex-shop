import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import usersApi from "../../../api/usersApi";
import { setAuth } from "../../../redux/auth/authActions";
import "./index.scss";

Login.propTypes = {
	tab: PropTypes.number,
	onTabClick: PropTypes.func,
};

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

	const onSubmitSignIn = async (e) => {
		e.preventDefault();
		try {
			let params = {
				userName,
				password,
			};
			const response = await usersApi.getUsers(params);

			if (response[0]) {
				dispatch(setAuth(response[0]));
				history.goBack();
			} else {
				setLoginFailed(true);
			}
		} catch (error) {
			console.log("Failed to fetch users", error);
		}
	};

	return (
		<>
			<div
				className={`account-item account-login${
					tab === 1 ? " active-content" : ""
				}`}
			>
				<form className="account-form" onSubmit={onSubmitSignIn}>
					<input
						type="text"
						name="username"
						value={userName}
						onChange={onUserNameChange}
						placeholder="User Name"
						className={`account-form__username${loginFailed ? " failed" : ""}`}
						required
					/>
					<input
						type="password"
						name="password"
						value={password}
						onChange={onPasswordChange}
						placeholder="Password"
						className={`account-form__password${loginFailed ? " failed" : ""}`}
						required
					/>
					<input
						type="submit"
						value="sign in"
						className="account-form__submit"
					/>
				</form>
				<button onClick={() => onTabClick(2)}>create an account</button>
				{loginFailed && (
					<div className="login-wrong">Wrong username or password</div>
				)}
			</div>
		</>
	);
}

export default Login;
