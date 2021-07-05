import axios from "axios";
import React, { useState } from "react";
import "./Register.scss";

function Register({ tab, onTabClick }) {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const [userNameErr, setuserNameErr] = useState(false);

	const onUserNameChange = (e) => {
		setUserName(e.target.value);
		setuserNameErr(false);
	};
	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const onSubmitRegister = (e) => {
		e.preventDefault();
		fetchUser();
	};

	const fetchUser = () => {
		axios
			.get(`https://zonex-fake.herokuapp.com/api/users?userName=${userName}`)
			.then(function (response) {
				// handle success
				if (response.data[0]) {
					setuserNameErr(true);
				} else {
					setuserNameErr(false);
					postUser();
				}
			})
			.catch((err) => {
				console.log("Error", err);
			});
	};

	const postUser = () => {
		axios
			.post(`https://zonex-fake.herokuapp.com/api/users`, {
				userName: userName,
				password: password,
			})
			.then(function (response) {
				console.log(response.data);
				onTabClick(1);
				setUserName("");
				setPassword("");
			})
			.catch((err) => {
				console.log("Error", err);
			});
	};
	return (
		<>
			<div
				className={
					tab === 2
						? "account-item account-register active-content"
						: "account-item account-register"
				}
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
					{userNameErr ? (
						<p className="usename-err">Username already exists</p>
					) : undefined}
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
