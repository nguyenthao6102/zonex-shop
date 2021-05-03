import "./Cart.scss";
import React from "react";
import CartItem from "./CartItem/CartItem";

function Cart(props) {
	return (
		<div className="cart grid wide">
			<h3 className="cart-title row">
				Shopping Cart <span>(6)</span>
			</h3>

			<div className="cart-content row">
				<table className="cart-content__list col l-8 m-12 c-12">
					<thead>
						<tr>
							<th>PRODUCT</th>
							<th></th>
							<th>PRICE</th>
							<th>QUANTITY</th>
							<th>SUBTOTAL</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
					</tbody>
				</table>
				<div className="cart-content__bill col l-4 m-12 c-12">
					<div className="bill-wrapper">
						<h5 className="bill-title">CART TOTALS</h5>
						<div className="bill-subtotal">
							<span>Subtotal</span>
							<span>$42700</span>
						</div>
						<div className="bill-shipping">
							<span>Shipping</span>
							<span>$1200</span>
						</div>
						<p className="bill-text">
							Shipping options will be updated during checkout.
						</p>
						<div className="bill-total">
							<span>Total</span>
							<span>$43900</span>
						</div>
						<button className="bill-checkout-btn">PROCEED TO CHECKOUT</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
