import React from "react";
import "./CartModalItem.scss";

function CartModalItem(props) {
	return (
		<li className="cart-modal-item">
			<div className="cart-modal-item__img"></div>
			<div className="cart-modal-item__info">
				<h3>Nordic Half-zip Pullover</h3>
				<div className="cart-modal-item-amount">
					<i className="fas fa-minus"></i>
					<span>3</span>
					<i className="fas fa-plus"></i>
				</div>
			</div>
			<div className="cart-modal-item__total">
				<i className="fas fa-times"></i>
				<span>$16900</span>
			</div>
		</li>
	);
}

export default CartModalItem;
