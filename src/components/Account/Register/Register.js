import React, { useState } from "react";
import "./Register.scss";

function Register({ tab, onTabClick }) {
	const onSubmitRegister = (e) => {
		e.preventDefault();
		console.log(userName, password);
	};

	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const onUserNameChange = (e) => {
		setUserName(e.target.value);
	};
	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	};

	return (
		<>
			<div
				className={tab === 2 ? "account-item active-content" : "account-item"}
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
