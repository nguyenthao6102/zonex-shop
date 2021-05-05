import React from "react";
import { Link } from "react-router-dom";
import "./DetailProduct.scss";

function DetailProduct(props) {
	return (
		<div className="detail-product grid wide">
			<div className="row">
				<div className="detail-product__img col l-7 m-6 c-12"></div>
				<div className="detail-product__content col l-5 m-6 c-12">
					<h3 className="detail-product-name">Turtleneck Sweater Dress</h3>
					<span className="detail-product-price">$1900</span>
					<p className="detail-product-description">
						We love the dramatic ruffle details down the sleeve, delicate fabric
						buttons and polished cuffs.
					</p>
					<div className="detail-product-amount">
						<i className="fas fa-minus"></i>
						<input type="text" />
						<i className="fas fa-plus"></i>
					</div>
					<button className="detail-product-btn">ADD TO CART</button>
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
