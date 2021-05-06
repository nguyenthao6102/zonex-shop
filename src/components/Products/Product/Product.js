import "./Product.scss";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/shop/shopActions";

Product.propTypes = {
	product: PropTypes.object,
};

function Product(props) {
	const { product } = props;
	const dispatch = useDispatch();
	return (
		<div className="product col l-2-4 m-4 c-6">
			<Link
				to="/products/id"
				className="product__img"
				style={{ backgroundImage: `url(${product.image})` }}
			></Link>
			<div className="product__content">
				<Link to="/products/id">{product.name}</Link>
				<span>${product.price}</span>
			</div>
			<div className="product__action">
				<button onClick={() => dispatch(addToCart(product.id))}>
					ADD TO CART
				</button>
				<ul>
					<li>
						<i className="fas fa-search"></i>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Product;
