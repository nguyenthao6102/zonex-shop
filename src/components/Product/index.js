import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cart/cartActions";
import {
	loadCurrentProduct,
	showMessage,
	showModalProduct,
} from "../../redux/shop/shopActions";
import "./index.scss";

Product.propTypes = {
	product: PropTypes.object,
};

function Product({ product }) {
	const dispatch = useDispatch();

	const onShowModalProduct = () => {
		dispatch(loadCurrentProduct(product.id));
		dispatch(showModalProduct(true));
	};

	const onAddToCart = () => {
		dispatch(addToCart(product, 1));
		dispatch(showMessage(true));
	};

	const { pathname } = useLocation();

	return (
		<div
			className={
				pathname === "/products"
					? "col l-3 m-4 c-6 mb-30"
					: "col l-2-4 m-4 c-6 mb-30"
			}
		>
			<div className={product.oldPrice ? "product sale" : "product"}>
				<div className="product__img">
					<Link
						to={`/products/${product.id}`}
						style={{ backgroundImage: `url(${product.image})` }}
					></Link>
				</div>

				<div className="product__content">
					<Link to={`/products/${product.id}`}>{product.name}</Link>
					<div>
						<div className="product-price">
							<span className="product-price__current">${product.price}</span>
							{product.oldPrice && (
								<span className="product-price__old">${product.oldPrice}</span>
							)}
						</div>
						<i className="fas fa-cart-arrow-down" onClick={onAddToCart}></i>
					</div>
				</div>
				<div className="product__action">
					<button onClick={onAddToCart}>ADD TO CART</button>
					<ul>
						<li onClick={onShowModalProduct}>
							<i className="fas fa-search"></i>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Product;
