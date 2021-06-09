import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
	changeQuantity,
	decreaseQuantity,
	increaseQuantity,
	removeFromCart,
} from "../../../../redux/cart/cartActions";
import "./CartModalItem.scss";

CartModalItem.propTypes = {
	cartItem: PropTypes.object,
};

function CartModalItem({ cartItem }) {
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
		<li className="cart-modal-item">
			<div
				className="cart-modal-item__img"
				style={{ backgroundImage: `url(${cartItem.image})` }}
			></div>
			<div className="cart-modal-item__content">
				<div className="cart-modal-item__info">
					<h3>{cartItem.name}</h3>
					<i className="far fa-times-circle" onClick={onRemoveFromCart}></i>
				</div>
				<div className="cart-modal-item__total">
					<div className="cart-modal-item-amount">
						<i className="fas fa-minus" onClick={onDecreaseQuantity}></i>
						<input
							type="number"
							step="1"
							min="1"
							value={cartItem.qty}
							onChange={onInputQtyChange}
						/>
						<i className="fas fa-plus" onClick={onIncreaseQuantity}></i>
					</div>
					<span>${cartItem.price * cartItem.qty}</span>
				</div>
			</div>
		</li>
	);
}

export default CartModalItem;
