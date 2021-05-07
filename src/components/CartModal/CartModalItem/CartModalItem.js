import React from "react";
import { useDispatch } from "react-redux";
import {
	changeQuantity,
	decreaseQuantity,
	increaseQuantity,
	removeFromCart,
} from "../../../redux/shop/shopActions";
import "./CartModalItem.scss";

function CartModalItem({ cartItem }) {
	const dispatch = useDispatch();
	const onInputQtyChange = (e) => {
		dispatch(changeQuantity(cartItem.id, e.target.value));
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
					<i
						className="far fa-times-circle"
						onClick={() => dispatch(removeFromCart(cartItem.id))}
					></i>
				</div>
				<div className="cart-modal-item__total">
					<div className="cart-modal-item-amount">
						<i
							className="fas fa-minus"
							onClick={() => dispatch(decreaseQuantity(cartItem.id))}
						></i>
						<input
							type="number"
							step="1"
							min="1"
							value={cartItem.qty}
							onChange={onInputQtyChange}
						/>
						<i
							className="fas fa-plus"
							onClick={() => dispatch(increaseQuantity(cartItem.id))}
						></i>
					</div>
					<span>${cartItem.price * cartItem.qty}</span>
				</div>
			</div>
		</li>
	);
}

export default CartModalItem;
