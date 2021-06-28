import React, { useState } from "react";
import "./Account.scss";
import Login from "./Login/Login";
import Register from "./Register/Register";
function Account() {
	const [tab, setTab] = useState(1);

	const onTabClick = (index) => {
		setTab(index);
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
					<Login tab={tab} onTabClick={onTabClick} />
					<Register tab={tab} onTabClick={onTabClick} />
				</div>
			</div>
		</div>
	);
}

export default Account;
