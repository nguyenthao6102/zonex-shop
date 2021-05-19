import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import CartModal from "../CartModal/CartModal";
import "./Header.scss";

function Header(props) {
	const [cartmodal, setCartmodal] = useState(false);
	const [navmobile, setNavmobile] = useState(false);
	const [scroll, setScroll] = useState(false);
	const [cartcount, setCartcount] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	const cart = useSelector((state) => state.shop.cart);
	useEffect(() => {
		let count = 0;
		cart.forEach((item) => {
			count += item.qty;
		});
		setCartcount(count);
	}, [cart, cartcount]);

	const handleScroll = () => {
		if (window.pageYOffset > 60) {
			if (!scroll) {
				setScroll(true);
			}
		} else {
			if (scroll) {
				setScroll(false);
			}
		}
	};

	const onCloseCartModal = () => {
		setCartmodal(false);
	};
	const onShowCartModal = () => {
		setCartmodal(true);
	};
	const onToggleNavMobile = () => {
		setNavmobile(!navmobile);
	};

	return (
		<header className={scroll ? "header scroll" : "header"}>
			<div className="header-wrapper grid wide">
				<div className="navbar row">
					<ul className="navbar__list col l-5">
						<li>
							<NavLink exact to="/" activeClassName="active">
								Home
							</NavLink>
						</li>
						<li>
							<a href=".">Product</a>
						</li>
						<li>
							<NavLink exact to="/about" activeClassName="active">
								About
							</NavLink>
						</li>
						<li>
							<NavLink exact to="/contact" activeClassName="active">
								Contact
							</NavLink>
						</li>
					</ul>
					<ul
						className={navmobile ? "navbar__mobile active" : "navbar__mobile"}
					>
						<li onClick={() => onToggleNavMobile()}>
							<NavLink exact to="/" activeClassName="active">
								Home
							</NavLink>
						</li>
						<li onClick={() => onToggleNavMobile()}>
							<a href=".">Product</a>
						</li>
						<li onClick={() => onToggleNavMobile()}>
							<NavLink exact to="/about" activeClassName="active">
								About
							</NavLink>
						</li>
						<li onClick={() => onToggleNavMobile()}>
							<NavLink exact to="/contact" activeClassName="active">
								Contact
							</NavLink>
						</li>
					</ul>
					{navmobile ? (
						<div className="navbar__close col m-5">
							<i
								className="fas fa-times"
								onClick={() => onToggleNavMobile()}
							></i>
						</div>
					) : (
						<div className="navbar__bars col m-5">
							<i
								className="fas fa-bars"
								onClick={() => onToggleNavMobile()}
							></i>
						</div>
					)}

					<Link to="/" className="navbar__logo col l-2 m-2">
						<img src={logoImage} alt="logo" />
					</Link>
					<ul className="navbar__control col l-5 m-5">
						<li>
							<i className="fas fa-search"></i>
						</li>

						<li>
							<i className="fas fa-user"></i>
						</li>
						<li onClick={() => onShowCartModal()}>
							<i className="fas fa-shopping-bag"></i>
							<span>{cartcount}</span>
						</li>
					</ul>
				</div>
			</div>
			<CartModal
				cartmodal={cartmodal}
				setCartmodal={setCartmodal}
				onCloseCartModal={onCloseCartModal}
			/>
		</header>
	);
}

export default Header;
