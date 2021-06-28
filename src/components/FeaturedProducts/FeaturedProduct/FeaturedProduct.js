import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
	loadCurrentProduct,
	showMessage,
} from "../../../redux/shop/shopActions";
import { addToCart } from "../../../redux/cart/cartActions";
import "./FeaturedProduct.scss";

FeaturedProduct.propTypes = {
	product: PropTypes.object,
};

function FeaturedProduct({ product }) {
	const dispatch = useDispatch();

	const onLoadCurrentProduct = () => {
		dispatch(loadCurrentProduct(product));
	};

	const onAddToCart = () => {
		dispatch(addToCart(product, 1));
		dispatch(showMessage(true));
	};

	return (
		<div className="col l-2-4 m-4 c-6 mb-30">
			<div className="featured-product">
				<div className="featured-product__img">
					<Link
						to={`/products/${product.id}`}
						style={{ backgroundImage: `url(${product.image})` }}
						onClick={onLoadCurrentProduct}
					></Link>
				</div>

				<div className="featured-product__content">
					<Link to={`/products/${product.id}`}>{product.name}</Link>
					<div>
						<div className="featured-product-price">
							<span className="featured-product-price__current">
								${product.price}
							</span>
							{product.oldPrice ? (
								<span className="featured-product-price__old">
									${product.oldPrice}
								</span>
							) : undefined}
						</div>
						<i className="fas fa-cart-arrow-down" onClick={onAddToCart}></i>
					</div>
				</div>
				<div className="featured-product__action">
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

export default FeaturedProduct;
