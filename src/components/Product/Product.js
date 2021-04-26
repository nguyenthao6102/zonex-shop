import "./Product.scss";
import React from "react";
import PropTypes from "prop-types";

Product.propTypes = {};

function Product(props) {
	return (
		<div className="product col l-2-4 m-4 c-6">
			<div className="product__img"></div>
			<div className="product__content">
				<h3>Nordic Half-zip Pullover</h3>
				<span>$120</span>
			</div>
			<div className="product__action">
				<button>ADD TO CART</button>
				<ul>
					<li>
						<i className="fas fa-search"></i>
					</li>
					<li>
						<i className="fas fa-heart"></i>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Product;
