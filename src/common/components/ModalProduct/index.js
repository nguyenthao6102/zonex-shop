import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/cart/cartActions";
import { showMessage, showModalProduct } from "../../../redux/shop/shopActions";
import "./index.scss";

function ModalProduct() {
	const [quantity, setQuantity] = useState(1);

	const currentProduct = useSelector((state) => state.shop.currentProduct);
	const dispatch = useDispatch();

	const onInputQtyChange = (e) => {
		setQuantity(e.target.value);
	};

	const onDecreaseQuantity = () => {
		setQuantity(quantity > 1 ? quantity - 1 : quantity);
	};

	const onIncreaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const onCloseModalProduct = () => {
		dispatch(showModalProduct(false));
	};

	const onAddToCart = () => {
		dispatch(addToCart(currentProduct, +quantity));
		dispatch(showMessage(true));
		setQuantity(1);
	};

	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

	return (
		<div className="modal">
			<div className="modal-overlay" onClick={onCloseModalProduct}></div>
			<div className="modal-product">
				<div className="modal-product__close" onClick={onCloseModalProduct}>
					<i class="fas fa-times"></i>
				</div>
				<div className="modal-product__left">
					<img src={currentProduct.image} alt="" />
				</div>
				<div className="modal-product__right">
					<h3 className="modal-product-name">{currentProduct.name}</h3>
					<div className="modal-product-price">
						<span className="modal-product-price__current">
							${currentProduct.price}
						</span>
						{currentProduct.oldPrice && (
							<span className="modal-product-price__old">
								${currentProduct.oldPrice}
							</span>
						)}
					</div>
					<p className="modal-product-description">
						{currentProduct.description}
					</p>
					<div className="modal-product-amount">
						<i className="fas fa-minus" onClick={onDecreaseQuantity}></i>
						<input
							type="number"
							step="1"
							value={quantity}
							onChange={onInputQtyChange}
						/>
						<i className="fas fa-plus" onClick={onIncreaseQuantity}></i>
					</div>
					<button className="modal-product-btn" onClick={onAddToCart}>
						ADD TO CART
					</button>

					<div className="modal-product-footer">
						<div className="modal-product-category">
							<span className="modal-product-category__sku">
								SKU: <span>463CS90</span>
							</span>
							<span className="modal-product-category__cate">
								BRAND: <span>{currentProduct.brands}</span>
							</span>
						</div>
						<div className="modal-product-tag">
							<span>
								TAGS: <span> NEW ARRIVALS, NEW COLLECTION, WOMEN</span>
							</span>
						</div>
						<div className="modal-product-share">
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

export default ModalProduct;
