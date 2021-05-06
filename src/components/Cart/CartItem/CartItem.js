import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/shop/shopActions";
import "./CartItem.scss";

function CartItem({ cartItem }) {
	const dispatch = useDispatch();
	return (
		<tr className="cart-item">
			<td
				className="cart-item__img"
				style={{ backgroundImage: `url(${cartItem.image})` }}
			></td>
			<td className="cart-item__name">{cartItem.name}</td>
			<td className="cart-item__price">${cartItem.price}</td>
			<td className="cart-item__quantity">
				<div>
					<i className="fas fa-minus"></i>
					<input type="text" value={cartItem.qty} />
					<i className="fas fa-plus"></i>
				</div>
			</td>
			<td className="cart-item__subtotal">${cartItem.price * cartItem.qty}</td>
			<td className="cart-item__remove">
				<i
					className="fas fa-times"
					onClick={() => dispatch(removeFromCart(cartItem.id))}
				></i>
			</td>
		</tr>
	);
}

export default CartItem;
