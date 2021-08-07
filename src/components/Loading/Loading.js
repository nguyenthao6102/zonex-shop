import React from "react";
import "./Loading.scss";
import loadingImg from "../../assets/images/loading.gif";

function Loading() {
	return (
		<div className="loading">
			<img src={loadingImg} alt="Loading" width="60px" height="60px" />
		</div>
	);
}

export default Loading;
