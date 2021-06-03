import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, loadCurrentProduct } from "../../../redux/shop/shopActions";
import "./Product.scss";

Product.propTypes = {
	product: PropTypes.object,
};

function Product({ product }) {
	const dispatch = useDispatch();

	const onLoadCurrentProduct = () => {
		dispatch(loadCurrentProduct(product));
	};

	const onAddToCart = () => {
		dispatch(addToCart(product.id, 1));
	};

	return (
		<div className="col l-3 m-4 c-6 mb-30">
			<div className="product">
				<div className="product__img">
					<Link
						to={`/products/${product.id}`}
						style={{ backgroundImage: `url(${product.image})` }}
						onClick={onLoadCurrentProduct}
					></Link>
				</div>

				<div className="product__content">
					<Link to={`/products/${product.id}`}>{product.name}</Link>
					<div>
						<span>${product.price}</span>
						<i className="fas fa-cart-arrow-down" onClick={onAddToCart}></i>
					</div>
				</div>
				<div className="product__action">
					<button onClick={onAddToCart}>ADD TO CART</button>
					<ul>
						<li>
							<i className="fas fa-search"></i>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Product;
