import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
	changeQuantity,
	decreaseQuantity,
	increaseQuantity,
	removeFromCart,
} from "../../../redux/shop/shopActions";
import "./CartItem.scss";

CartItem.propTypes = {
	cartItem: PropTypes.object,
};

function CartItem({ cartItem }) {
	const dispatch = useDispatch();

	const onInputQtyChange = (e) => {
		dispatch(changeQuantity(cartItem.id, e.target.value));
	};

	const onDecreaseQuantity = () => {
		dispatch(decreaseQuantity(cartItem.id));
	};

	const onIncreaseQuantity = () => {
		dispatch(increaseQuantity(cartItem.id));
	};

	const onRemoveFromCart = () => {
		dispatch(removeFromCart(cartItem.id));
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
					<i className="fas fa-minus" onClick={onDecreaseQuantity}></i>
					<input
						type="number"
						step="1"
						value={cartItem.qty}
						onChange={onInputQtyChange}
					/>
					<i className="fas fa-plus" onClick={onIncreaseQuantity}></i>
				</div>
			</td>
			<td className="cart-item__subtotal">${cartItem.price * cartItem.qty}</td>
			<td className="cart-item__remove">
				<i className="fas fa-times" onClick={onRemoveFromCart}></i>
			</td>
		</tr>
	);
}

export default CartItem;
