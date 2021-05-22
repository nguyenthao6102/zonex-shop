import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
	addToCart,
	loadCurrentProduct,
	removeCurrentProduct,
} from "../../redux/shop/shopActions";
import "./DetailProduct.scss";

function DetailProduct(props) {
	const { id } = useParams();
	const currentProduct = useSelector((state) => state.shop.currentProduct);
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);
	const onInputQtyChange = (e) => {
		setQuantity(e.target.value);
	};

	const fetchDetailProduct = async (id) => {
		const response = await axios
			.get(`https://60a28a57745cd7001757758c.mockapi.io/api/v1/products/${id}`)
			.catch((err) => {
				console.log("error: ", err);
			});
		dispatch(loadCurrentProduct(response.data));
	};

	useEffect(() => {
		if (id && id !== "") fetchDetailProduct(id);
		return () => {
			dispatch(removeCurrentProduct());
		};
	}, [id]); // eslint-disable-line react-hooks/exhaustive-deps

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
						onClick={() => {
							dispatch(addToCart(currentProduct.id, +quantity));
							setQuantity(1);
						}}
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
								CATEGORIES: <span>{currentProduct.categories}</span>
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
