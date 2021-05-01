import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.scss";

function Cart({ showcart, onCloseCart }) {
	return (
		<div className={showcart ? "cart active" : "cart"}>
			<div className="cart__top">
				<h3>Cart</h3>
				<i className="fas fa-times" onClick={() => onCloseCart()}></i>
			</div>
			<ul className="cart__list">
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
			</ul>
			<div className="cart__bottom">
				<div className="subtotal">
					<span className="subtotal__title">Subtotal</span>
					<span className="subtotal__price">$21000</span>
				</div>
				<button className="viewcart-btn">View cart</button>
				<button className="checkout-btn">Checkout</button>
			</div>
		</div>
	);
}

export default Cart;
