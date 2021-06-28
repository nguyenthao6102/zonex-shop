import React, { useState } from "react";
import "./Login.scss";

function Login({ tab, onTabClick }) {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const onUserNameChange = (e) => {
		setUserName(e.target.value);
	};
	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const onSubmitSignIn = (e) => {
		e.preventDefault();
		console.log(userName, password);
	};

	return (
		<>
			<div
				className={tab === 1 ? "account-item active-content" : "account-item"}
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
			</div>
		</>
	);
}

export default Login;
