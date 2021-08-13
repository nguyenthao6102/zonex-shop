import React from "react";
import loadingImg from "../../../assets/images/loading.gif";
import "./index.scss";

function Loading() {
	return (
		<div className="loading">
			<img src={loadingImg} alt="Loading" />
		</div>
	);
}

export default Loading;
