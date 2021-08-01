import React, { useState } from "react";
import PropTypes from "prop-types";
import usersApi from "../../../api/usersApi";
import "./index.scss";

Register.propTypes = {
	tab: PropTypes.number,
	onTabClick: PropTypes.func,
};

function Register({ tab, onTabClick }) {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const [userNameErr, setUserNameErr] = useState(false);

	const onUserNameChange = (e) => {
		setUserName(e.target.value);
		setUserNameErr(false);
	};
	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const onSubmitRegister = async (e) => {
		e.preventDefault();
		try {
			const params = { userName };
			const response = await usersApi.getUsers(params);

			if (response[0]) {
				setUserNameErr(true);
			} else {
				setUserNameErr(false);

				try {
					await usersApi.postUser({
						userName: userName,
						password: password,
					});
					onTabClick(1);
					setUserName("");
					setPassword("");
				} catch (error) {
					console.log("Failed to post user");
				}
			}
		} catch (error) {
			console.log("Failed to fetch user", error);
		}
	};

	return (
		<>
			<div
				className={`account-item account-register${
					tab === 2 ? " active-content" : ""
				}`}
			>
				<form className="account-form" onSubmit={onSubmitRegister}>
					<input
						type="text"
						name="username"
						value={userName}
						onChange={onUserNameChange}
						placeholder="User Name"
						className="account-form__username"
						required
					/>
					{userNameErr && (
						<p className="usename-err">Username already exists</p>
					)}
					<input
						type="password"
						name="password"
						value={password}
						onChange={onPasswordChange}
						placeholder="Password"
						className="account-form__password"
						required
					/>
					<p>
						Your personal data will be used to support your experience
						throughout this website, to manage access to your account, and for
						other purposes described in our <span>privacy policy</span>.
					</p>
					<input
						type="submit"
						value="sign up"
						className="account-form__submit"
					/>
				</form>

				<button onClick={() => onTabClick(1)}>already has an account</button>
			</div>
		</>
	);
}

export default Register;
