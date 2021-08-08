import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showMessage } from "../../../redux/shop/shopActions";
import "./index.scss";

function ToastMessage() {
	const dispatch = useDispatch();

	useEffect(() => {
		const timeHide = setTimeout(() => {
			dispatch(showMessage(false));
		}, 800);
		return () => {
			clearTimeout(timeHide);
		};
	}, [dispatch]);
	return <div className="message">Add to cart done</div>;
}

export default ToastMessage;
