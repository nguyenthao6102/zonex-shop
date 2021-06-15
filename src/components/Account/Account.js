import React, { useState } from "react";
import "./Account.scss";
function Account() {
	const [tab, setTab] = useState(1);

	const onTabClick = (index) => {
		setTab(index);
	};

	const onSubmitSignIn = (e) => {
		e.preventDefault();
	};

	const onSubmitRegister = (e) => {
		e.preventDefault();
	};
	return (
		<div className="account">
			<div className="account-title">
				<h2>My Account</h2>
			</div>
			<div className="account-body">
				<div className="account-tabs">
					<div
						className={tab === 1 ? "account-tab active-tab" : "account-tab"}
						onClick={() => onTabClick(1)}
					>
						login
					</div>
					<div
						className={tab === 2 ? "account-tab active-tab" : "account-tab"}
						onClick={() => onTabClick(2)}
					>
						register
					</div>
				</div>
				<div className="account-content">
					<div
						className={
							tab === 1 ? "account-item active-content" : "account-item"
						}
					>
						<form className="account-form" onSubmit={onSubmitSignIn}>
							<input
								type="text"
								name="username"
								placeholder="User Name"
								className="account-form__username"
								required
							/>
							<input
								type="password"
								name="password"
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
					<div
						className={
							tab === 2 ? "account-item active-content" : "account-item"
						}
					>
						<form className="account-form" onSubmit={onSubmitRegister}>
							<input
								type="text"
								name="username"
								placeholder="User Name"
								className="account-form__username"
								required
							/>
							<input
								type="password"
								name="password"
								placeholder="Password"
								className="account-form__password"
								required
							/>
							<p>
								Your personal data will be used to support your experience
								throughout this website, to manage access to your account, and
								for other purposes described in our <span>privacy policy</span>.
							</p>
							<input
								type="submit"
								value="sign up"
								className="account-form__submit"
							/>
						</form>

						<button onClick={() => onTabClick(1)}>
							already has an account
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Account;
