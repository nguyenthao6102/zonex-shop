import React from "react";
import { useState } from "react";
import logoImage from "../../assets/images/logo.png";
import Cart from "../Cart/Cart";
import "./Header.scss";

function Header(props) {
	const [showcart, setShowcart] = useState(false);
	const [navmobile, setNavmobile] = useState(false);

	const onCloseCart = () => {
		setShowcart(false);
	};
	const onShowCart = () => {
		setShowcart(true);
	};
	const toggleNavMobile = () => {
		setNavmobile(!navmobile);
	};
	return (
		<header className="header">
			<div className="header-wrapper grid wide">
				<div className="navbar row">
					<ul className="navbar__list col l-5">
						<li>
							<a href=".">Home</a>
						</li>
						<li>
							<a href=".">Product</a>
						</li>
						<li>
							<a href=".">About us</a>
						</li>
						<li>
							<a href=".">Contact</a>
						</li>
					</ul>
					<ul
						className={navmobile ? "navbar__mobile active" : "navbar__mobile"}
					>
						<li>
							<a href=".">Home</a>
						</li>
						<li>
							<a href=".">Product</a>
						</li>
						<li>
							<a href=".">About us</a>
						</li>
						<li>
							<a href=".">Contact</a>
						</li>
					</ul>
					<div className="navbar__bars col m-5">
						<i className="fas fa-bars" onClick={() => toggleNavMobile()}></i>
					</div>
					<div className="navbar__logo col l-2 m-2">
						<img src={logoImage} alt="logo" />
					</div>
					<ul className="navbar__control col l-5 m-5">
						<li>
							<i className="fas fa-search"></i>
						</li>

						<li>
							<i className="fas fa-heart"></i>
							<span>3</span>
						</li>
						<li>
							<i className="fas fa-user"></i>
						</li>
						<li onClick={() => onShowCart()}>
							<i className="fas fa-shopping-bag"></i>
							<span>3</span>
						</li>
					</ul>
				</div>
			</div>
			<Cart showcart={showcart} onCloseCart={onCloseCart} />
		</header>
	);
}

export default Header;
