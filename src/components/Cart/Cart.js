import "./Cart.scss";
import React, { useEffect, useState } from "react";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";

function Cart() {
	const cart = useSelector((state) => state.cart);

	const showCart = (cart) => {
		let result = null;
		if (cart.length > 0) {
			result = cart.map((item, index) => {
				return <CartItem key={item.id} cartItem={item} />;
			});
		}
		return result;
	};

	const [totalprice, setTotalprice] = useState(0);
	const [totalitem, setTotalitem] = useState(0);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const [fullNameErr, setFullNameErr] = useState(false);
	const [emailErr, setEmailErr] = useState(false);
	const [phoneErr, setPhoneErr] = useState(false);
	const [addressErr, setAddressErr] = useState(false);

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

	const onSubmit = (e) => {
		e.preventDefault();
		const isValid = formValidation();
		if (isValid) {
			console.log("ok");
		}
	};

	useEffect(() => {
		let totalItem = 0;
		let totalPrice = 0;
		cart.forEach((item) => {
			totalItem += item.qty;
			totalPrice += item.qty * item.price;
		});
		setTotalitem(totalItem);
		setTotalprice(totalPrice);
	}, [cart, totalitem, totalprice]);

	return (
		<div className="cart grid wide">
			<h3 className="cart-title row">Shopping Cart ({totalitem})</h3>
			{cart.length > 0 ? (
				<div className="cart-content row">
					<div className="cart-content__list col l-8 m-12 c-12">
						<table>
							<thead>
								<tr>
									<th>PRODUCT</th>
									<th></th>
									<th>PRICE</th>
									<th></th>
									<th>SUBTOTAL</th>
									<th></th>
								</tr>
							</thead>
							<tbody>{showCart(cart)}</tbody>
						</table>
					</div>
					<div className="cart-content__bill col l-4 m-12 c-12">
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
								{fullNameErr ? (
									<p className="bill-input-err">Enter a valid fullname</p>
								) : undefined}
								<input
									type="text"
									className="bill-form__input"
									placeholder="Email"
									onChange={onEmailChange}
									value={email}
									required
								/>
								{emailErr ? (
									<p className="bill-input-err">Enter a valid email</p>
								) : undefined}

								<input
									type="text"
									className="bill-form__input"
									placeholder="Phone"
									onChange={onPhoneChange}
									value={phone}
									required
								/>
								{phoneErr ? (
									<p className="bill-input-err">Enter a valid phone</p>
								) : undefined}

								<input
									type="text"
									className="bill-form__input"
									placeholder="Address"
									onChange={onAddressChange}
									value={address}
									required
								/>
								{addressErr ? (
									<p className="bill-input-err">Enter a valid address</p>
								) : undefined}
								<input
									type="submit"
									className="bill-form__submit"
									value="CHECKOUT"
								/>
							</form>
						</div>
					</div>
				</div>
			) : (
				<div className="cart-empty">
					<h3>No product in the cart.</h3>
				</div>
			)}
		</div>
	);
}

export default Cart;
