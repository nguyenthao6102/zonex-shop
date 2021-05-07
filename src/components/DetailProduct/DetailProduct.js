import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/shop/shopActions";
import "./DetailProduct.scss";

function DetailProduct(props) {
	const currentProduct = useSelector((state) => state.shop.currentProduct);
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);
	const onInputQtyChange = (e) => {
		setQuantity(e.target.value);
	};
	return (
		<div className="detail-product grid wide">
			<div className="row">
				<div
					className="detail-product__img col l-7 m-6 c-12"
					style={{ backgroundImage: `url(${currentProduct.image})` }}
				></div>
				<div className="detail-product__content col l-5 m-6 c-12">
					<h3 className="detail-product-name">{currentProduct.name}</h3>
					<span className="detail-product-price">${currentProduct.price}</span>
					<p className="detail-product-description">
						{currentProduct.description}
					</p>
					<div className="detail-product-amount">
						<i
							className="fas fa-minus"
							onClick={() =>
								setQuantity(quantity > 1 ? quantity - 1 : quantity)
							}
						></i>
						<input
							type="number"
							step="1"
							value={quantity}
							onChange={onInputQtyChange}
						/>
						<i
							className="fas fa-plus"
							onClick={() => setQuantity(quantity + 1)}
						></i>
					</div>
					<button
						className="detail-product-btn"
						onClick={() => dispatch(addToCart(currentProduct.id, +quantity))}
					>
						ADD TO CART
					</button>
					<Link to="/" className="detail-product-back">
						BACK TO HOME PAGE
					</Link>
					<div className="detail-product-footer">
						<div className="detail-product-category">
							<span className="detail-product-category__sku">
								SKU: <span>463CS90</span>
							</span>
							<span className="detail-product-category__cate">
								CATEGORIES: <span>CLOTHES, DRESSES</span>
							</span>
						</div>
						<div className="detail-product-tag">
							<span>
								TAGS: <span> NEW ARRIVALS, NEW COLLECTION, WOMEN</span>
							</span>
						</div>
						<div className="detail-product-share">
							<span>SHARE: </span>
							<div>
								<i className="fab fa-twitter"></i>
								<i className="fab fa-facebook-square"></i>
								<i className="fab fa-google-plus-g"></i>
								<i className="fab fa-pinterest-p"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailProduct;
