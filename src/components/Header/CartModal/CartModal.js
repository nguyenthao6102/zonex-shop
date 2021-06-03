import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CartModal.scss";
import CartModalItem from "./CartModalItem/CartModalItem";
import PropTypes from "prop-types";

CartModal.propTypes = {
	cartmodal: PropTypes.bool,
	setCartmodal: PropTypes.func,
	onCloseCartModal: PropTypes.func,
};

export const useClickOutside = (handler) => {
	const domNode = useRef();

	useEffect(() => {
		const maybeHandler = (event) => {
			if (!domNode.current.contains(event.target)) {
				handler();
			}
		};

		document.addEventListener("mousedown", maybeHandler);

		return () => {
			document.removeEventListener("mousedown", maybeHandler);
		};
	});

	return domNode;
};

function CartModal({ cartmodal, setCartmodal, onCloseCartModal }) {
	let domNode = useClickOutside(() => {
		setCartmodal(false);
	});

	const cart = useSelector((state) => state.shop.cart);

	const showCartModalList = (cart) => {
		let result = null;
		if (cart.length > 0) {
			result = cart.map((item, index) => {
				return <CartModalItem key={item.id} cartItem={item} />;
			});
		}
		return result;
	};

	const [totalprice, setTotalprice] = useState(0);

	useEffect(() => {
		let totalPrice = 0;
		cart.forEach((item) => {
			totalPrice += item.qty * item.price;
		});
		setTotalprice(totalPrice);
	}, [cart, totalprice]);

	return (
		<div
			ref={domNode}
			className={cartmodal ? "cart-modal active" : "cart-modal"}
		>
			<div className="cart-modal__top">
				<h3>Cart</h3>
				<i className="fas fa-times" onClick={onCloseCartModal}></i>
			</div>
			{cart.length > 0 ? (
				<>
					<ul className="cart-modal__list">{showCartModalList(cart)}</ul>
					<div className="cart-modal__bottom">
						<div className="subtotal-modal">
							<span className="subtotal-modal__title">Subtotal</span>
							<span className="subtotal-modal__price">${totalprice}</span>
						</div>

						<Link
							to="/cart"
							className="viewcart-modal-btn"
							onClick={onCloseCartModal}
						>
							View cart
						</Link>

						<button className="checkout-modal-btn">Checkout</button>
					</div>
				</>
			) : (
				<div className="cart-modal__empty">
					<h3>No products in the cart.</h3>
				</div>
			)}
		</div>
	);
}

export default CartModal;
