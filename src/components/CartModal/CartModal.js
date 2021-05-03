import React from "react";
import "./CartModal.scss";
import CartModalItem from "./CartModalItem/CartModalItem";

function CartModal({ cartmodal, onCloseCartModal }) {
	return (
		<div className={cartmodal ? "cart-modal active" : "cart-modal"}>
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
				<button className="viewcart-modal-btn">View cart</button>
				<button className="checkout-modal-btn">Checkout</button>
			</div>
		</div>
	);
}

export default CartModal;
