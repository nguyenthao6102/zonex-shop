import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import CartModal from "../CartModal/CartModal";
import "./Header.scss";

function Header(props) {
	const [cartmodal, setCartmodal] = useState(false);
	const [navmobile, setNavmobile] = useState(false);
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
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
							<Link to="/">Home</Link>
						</li>
						<li>
							<a href=".">Product</a>
						</li>
						<li>
							<a href=".">About</a>
						</li>
						<li>
							<a href=".">Contact</a>
						</li>
					</ul>
					<ul
						className={navmobile ? "navbar__mobile active" : "navbar__mobile"}
					>
						<li onClick={() => onToggleNavMobile()}>
							<Link to="/">Home</Link>
						</li>
						<li onClick={() => onToggleNavMobile()}>
							<a href=".">Product</a>
						</li>
						<li onClick={() => onToggleNavMobile()}>
							<a href=".">About</a>
						</li>
						<li onClick={() => onToggleNavMobile()}>
							<a href=".">Contact</a>
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
							<span>3</span>
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
