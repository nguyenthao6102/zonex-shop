import React from "react";
import PropTypes from "prop-types";
import "./CartItem.scss";

CartItem.propTypes = {};

function CartItem(props) {
	return (
		<li className="cart-item">
			<div className="cart-item__img"></div>
			<div className="cart-item__info">
				<h3>Nordic Half-zip Pullover</h3>
				<div className="cart-item-amount">
					<i className="fas fa-minus"></i>
					<span>3</span>
					<i className="fas fa-plus"></i>
				</div>
			</div>
			<div className="cart-item__total">
				<i className="fas fa-times"></i>
				<span>$16900</span>
			</div>
		</li>
	);
}

export default CartItem;
