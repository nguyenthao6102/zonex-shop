import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loading from "../../common/components/Loading";
import { addToCart } from "../../redux/cart/cartActions";
import {
	loadCurrentProduct,
	removeCurrentProduct,
	showLoading,
	showMessage,
} from "../../redux/shop/shopActions";
import "./index.scss";

function DetailProduct() {
	const { id } = useParams();

	const currentProduct = useSelector((state) => state.shop.currentProduct);
	const loading = useSelector((state) => state.shop.loading);

	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);

	const onInputQtyChange = (e) => {
		setQuantity(e.target.value);
	};

	const onDecreaseQuantity = () => {
		setQuantity(quantity > 1 ? quantity - 1 : quantity);
	};

	const onIncreaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const onAddToCart = () => {
		dispatch(addToCart(currentProduct, +quantity));
		dispatch(showMessage(true));
		setQuantity(1);
	};

	useEffect(() => {
		dispatch(showLoading(true));
		dispatch(loadCurrentProduct(id));

		return () => {
			dispatch(removeCurrentProduct());
		};
	}, [id, dispatch]);

	return (
		<div className="detail-product grid wide">
			{loading ? (
				<div className="detail-product__loading">
					<Loading />
				</div>
			) : (
				<>
					<div className="row">
						<div className="detail-product__img col l-7 m-6 c-12">
							<img src={currentProduct.image} alt={currentProduct.id} />
						</div>

						<div className="detail-product__content col l-5 m-6 c-12">
							<h3 className="detail-product-name">{currentProduct.name}</h3>
							<div className="detail-product-price">
								<span className="detail-product-price__current">
									${currentProduct.price}
								</span>
								{currentProduct.oldPrice && (
									<span className="detail-product-price__old">
										${currentProduct.oldPrice}
									</span>
								)}
							</div>
							<p className="detail-product-description">
								{currentProduct.description}
							</p>
							<div className="detail-product-amount">
								<i className="fas fa-minus" onClick={onDecreaseQuantity}></i>
								<input
									type="number"
									step="1"
									value={quantity}
									onChange={onInputQtyChange}
								/>
								<i className="fas fa-plus" onClick={onIncreaseQuantity}></i>
							</div>
							<button className="detail-product-btn" onClick={onAddToCart}>
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
										BRAND: <span>{currentProduct.brands}</span>
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

					<div className="row description">
						<h2 className="description__title col l-o-4 l-4 m-o-4 m-4 c-o-4 c-4 t-center">
							Description
						</h2>
						<div className="description__paragraph col l-12 m-12 c-12">
							<h3>Paragraph text</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae
								vitae dicta sunt explicabo.
							</p>
							<p>
								Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
								aut fugit, sed quia consequuntur magni dolores eos qui ratione
								voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
								ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
								non numquam eius modi tempora incidunt ut labore et dolore
								magnam aliquam quaerat voluptatem.
							</p>
						</div>
					</div>
					<div className="row list-and-image">
						<div className="list-left col l-7 m-7 c-12">
							<div className="list-left__unordered">
								<h3>Unordered list</h3>
								<ul>
									<li>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</li>
									<li>Maecenas ullamcorper est et massa mattis condimentum.</li>
									<li>
										Vestibulum sed massa vel ipsum imperdiet malesuada id tempus
										nisl.
									</li>
									<li>
										Etiam nec massa et lectus faucibus ornare congue in nunc.
									</li>
									<li>Mauris eget diam magna, in blandit turpis.</li>
								</ul>
							</div>
							<div className="list-left__ordered">
								<h3>Ordered list</h3>
								<ol>
									<li>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</li>
									<li>Maecenas ullamcorper est et massa mattis condimentum.</li>
									<li>
										Vestibulum sed massa vel ipsum imperdiet malesuada id tempus
										nisl.
									</li>
									<li>
										Etiam nec massa et lectus faucibus ornare congue in nunc.
									</li>
									<li>Mauris eget diam magna, in blandit turpis.</li>
								</ol>
							</div>
						</div>
						<div className="image-right col l-5 m-5 c-12">
							<img
								src="https://cdn.shopify.com/s/files/1/0256/4594/0810/files/bn-2_987b0f69-547f-4cd6-a974-b7f0e2cd1de4_720x.jpg?v=1619498322"
								alt="img right"
							/>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default DetailProduct;
