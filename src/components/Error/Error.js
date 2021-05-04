import React from "react";
import "./Error.scss";

function Error(props) {
	return (
		<div className="error grid wide">
			<h1 className="error__title">Error 404</h1>
			<h2 className="error__sub">
				We are sorry, the page you've requested is not available
			</h2>
			<a href="/" className="error__back">
				BACK TO HOME PAGE
			</a>
		</div>
	);
}

export default Error;