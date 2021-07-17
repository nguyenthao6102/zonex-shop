import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
	loadCurrentProduct,
	showMessage,
} from "../../../redux/shop/shopActions";
import { addToCart } from "../../../redux/cart/cartActions";
import "./HomeProduct.scss";

HomeProduct.propTypes = {
	product: PropTypes.object,
};

function HomeProduct({ product }) {
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
			<div className={product.oldPrice ? "home-product sale" : "home-product"}>
				<div className="home-product__img">
					<Link
						to={`/products/${product.id}`}
						style={{ backgroundImage: `url(${product.image})` }}
						onClick={onLoadCurrentProduct}
					></Link>
				</div>

				<div className="home-product__content">
					<Link to={`/products/${product.id}`}>{product.name}</Link>
					<div>
						<div className="home-product-price">
							<span className="home-product-price__current">
								${product.price}
							</span>
							{product.oldPrice ? (
								<span className="home-product-price__old">
									${product.oldPrice}
								</span>
							) : undefined}
						</div>
						<i className="fas fa-cart-arrow-down" onClick={onAddToCart}></i>
					</div>
				</div>
				<div className="home-product__action">
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

export default HomeProduct;
