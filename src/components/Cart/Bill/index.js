import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ordersApi from "../../../api/ordersApi";
import { setCart } from "../../../redux/cart/cartActions";
import "./index.scss";

Bill.propTypes = {
	cart: PropTypes.array,
	totalprice: PropTypes.number,
};

function Bill({ cart, totalprice }) {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const [fullNameErr, setFullNameErr] = useState(false);
	const [emailErr, setEmailErr] = useState(false);
	const [phoneErr, setPhoneErr] = useState(false);
	const [addressErr, setAddressErr] = useState(false);

	const auth = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const history = useHistory();

	const onFullNameChange = (e) => {
		setFullName(e.target.value);
		setFullNameErr(false);
	};

	const onEmailChange = (e) => {
		setEmail(e.target.value);
		setEmailErr(false);
	};

	const onPhoneChange = (e) => {
		setPhone(e.target.value);
		setPhoneErr(false);
	};

	const onAddressChange = (e) => {
		setAddress(e.target.value);
		setAddressErr(false);
	};

	const formValidation = () => {
		let isValid = true;

		function removeAscent(str) {
			if (str === null || str === undefined) return str;
			str = str.toLowerCase();
			str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
			str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
			str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
			str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
			str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
			str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
			str = str.replace(/đ/g, "d");
			return str;
		}

		const regexFullName = /^[a-zA-Z ]{2,}$/g;
		const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
		const regexPhone = /^0[0-9]{9,10}$/g;
		const regexAddress = /^[a-zA-Z0-9 ,]{2,}$/g;

		if (!regexFullName.test(removeAscent(fullName))) {
			setFullNameErr(true);
			isValid = false;
		}

		if (!regexEmail.test(email)) {
			setEmailErr(true);
			isValid = false;
		}

		if (!regexPhone.test(phone)) {
			setPhoneErr(true);
			isValid = false;
		}

		if (!regexAddress.test(removeAscent(address))) {
			setAddressErr(true);
			isValid = false;
		}

		return isValid;
	};

	const createOrder = async () => {
		const date = new Date().toLocaleDateString();
		const time = new Date().toLocaleTimeString();

		const order = {
			userId: auth.id,
			fullName: fullName,
			email: email,
			phone: phone,
			address: address,
			products: cart,
			date: date + " " + time,
			total: totalprice,
			status: "On hold",
		};

		try {
			await ordersApi.postOrder(order);
			dispatch(setCart([]));
			history.push("/orders");
		} catch (error) {
			console.log("Failed to post order");
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const isValid = formValidation();

		if (!auth) {
			return history.push("/account");
		}

		if (isValid) {
			createOrder();
		}
	};
	return (
		<div className="bill col l-4 m-12 c-12">
			<div className="bill-wrapper">
				<h5 className="bill-title">Cart Totals</h5>
				<div className="bill-subtotal">
					<span>Subtotal</span>
					<span>${totalprice}</span>
				</div>
				<div className="bill-shipping">
					<span>Shipping</span>
					<span>$0</span>
				</div>
				<p className="bill-text">
					Shipping options will be updated during checkout.
				</p>

				<div className="bill-total">
					<span>Total</span>
					<span>${totalprice}</span>
				</div>
				<h5 className="bill-title">Billing details</h5>
				<form className="bill-form" onSubmit={onSubmit}>
					<input
						type="text"
						className="bill-form__input"
						placeholder="Full Name"
						onChange={onFullNameChange}
						value={fullName}
						required
					/>
					{fullNameErr && (
						<p className="bill-input-err">Enter a valid fullname</p>
					)}
					<input
						type="text"
						className="bill-form__input"
						placeholder="Email"
						onChange={onEmailChange}
						value={email}
						required
					/>
					{emailErr && <p className="bill-input-err">Enter a valid email</p>}

					<input
						type="text"
						className="bill-form__input"
						placeholder="Phone"
						onChange={onPhoneChange}
						value={phone}
						required
					/>
					{phoneErr && <p className="bill-input-err">Enter a valid phone</p>}

					<input
						type="text"
						className="bill-form__input"
						placeholder="Address"
						onChange={onAddressChange}
						value={address}
						required
					/>
					{addressErr && (
						<p className="bill-input-err">Enter a valid address</p>
					)}
					<input type="submit" className="bill-form__submit" value="CHECKOUT" />
				</form>
			</div>
		</div>
	);
}

export default Bill;
