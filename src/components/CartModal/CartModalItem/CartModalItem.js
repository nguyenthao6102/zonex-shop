import React from "react";
import "./CartModalItem.scss";

function CartModalItem(props) {
	return (
		<li className="cart-modal-item">
			<div className="cart-modal-item__img"></div>
			<div className="cart-modal-item__content">
				<div className="cart-modal-item__info">
					<h3>Nordic Half-zip Pullover</h3>
					<i className="far fa-times-circle"></i>
				</div>
				<div className="cart-modal-item__total">
					<div className="cart-modal-item-amount">
						<i className="fas fa-minus"></i>
						<input type="text" />
						<i className="fas fa-plus"></i>
					</div>
					<span>$169000</span>
				</div>
			</div>
		</li>
	);
}

export default CartModalItem;
