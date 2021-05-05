import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./CartModal.scss";
import CartModalItem from "./CartModalItem/CartModalItem";

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
	return (
		<div
			ref={domNode}
			className={cartmodal ? "cart-modal active" : "cart-modal"}
		>
			<div className="cart-modal__top">
				<h3>Cart</h3>
				<i className="fas fa-times" onClick={() => onCloseCartModal()}></i>
			</div>
			<ul className="cart-modal__list">
				<CartModalItem />
				<CartModalItem />
				<CartModalItem />
				<CartModalItem />
			</ul>
			<div className="cart-modal__bottom">
				<div className="subtotal-modal">
					<span className="subtotal-modal__title">Subtotal</span>
					<span className="subtotal-modal__price">$21000</span>
				</div>

				<Link
					to="/cart"
					className="viewcart-modal-btn"
					onClick={() => onCloseCartModal()}
				>
					View cart
				</Link>

				<button className="checkout-modal-btn">Checkout</button>
			</div>
		</div>
	);
}

export default CartModal;
