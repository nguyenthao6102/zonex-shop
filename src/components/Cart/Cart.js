import "./Cart.scss";
import React, { useEffect, useState } from "react";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";

function Cart(props) {
	const cart = useSelector((state) => state.shop.cart);
	const showCart = () => {
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

			<div className="cart-content row">
				<table className="cart-content__list col l-8 m-12 c-12">
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
				<div className="cart-content__bill col l-4 m-12 c-12">
					<div className="bill-wrapper">
						<h5 className="bill-title">CART TOTALS</h5>
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
						<button className="bill-checkout-btn">PROCEED TO CHECKOUT</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
