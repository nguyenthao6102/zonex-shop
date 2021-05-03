import React from "react";
import "./CartItem.scss";

function CartItem(props) {
	return (
		<tr className="cart-item">
			<td className="cart-item__img"></td>
			<td className="cart-item__name">Chambray Shirt In Vintage Indigo</td>
			<td className="cart-item__price">$9900</td>
			<td className="cart-item__quantity">
				<div>
					<i className="fas fa-minus"></i>
					<input type="text" />
					<i className="fas fa-plus"></i>
				</div>
			</td>
			<td className="cart-item__subtotal">$9900</td>
			<td className="cart-item__remove">
				<i className="fas fa-times"></i>
			</td>
		</tr>
	);
}

export default CartItem;
