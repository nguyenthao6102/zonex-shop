import React from "react";
import { useDispatch } from "react-redux";
import {
	changeQuantity,
	decreaseQuantity,
	increaseQuantity,
	removeFromCart,
} from "../../../redux/shop/shopActions";
import "./CartItem.scss";

function CartItem({ cartItem }) {
	const dispatch = useDispatch();
	const onInputQtyChange = (e) => {
		dispatch(changeQuantity(cartItem.id, e.target.value));
	};

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
					<i
						className="fas fa-minus"
						onClick={() => dispatch(decreaseQuantity(cartItem.id))}
					></i>
					<input
						type="number"
						step="1"
						value={cartItem.qty}
						onChange={onInputQtyChange}
					/>
					<i
						className="fas fa-plus"
						onClick={() => dispatch(increaseQuantity(cartItem.id))}
					></i>
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
