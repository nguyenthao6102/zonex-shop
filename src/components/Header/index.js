import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import CartModal from "./CartModal";
import SearchBar from "./SearchBar";
import "./index.scss";
import { removeAuth } from "../../redux/auth/authActions";

function Header() {
	const [cartmodal, setCartmodal] = useState(false);
	const [navmobile, setNavmobile] = useState(false);
	const [searchBar, setSearchBar] = useState(false);
	const [scroll, setScroll] = useState(false);
	const [cartcount, setCartcount] = useState(0);
	const history = useHistory();

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	const cart = useSelector((state) => state.cart);
	const auth = useSelector((state) => state.auth);

	const dispatch = useDispatch();

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

	const onShowSearchBar = () => {
		setSearchBar(true);
	};

	const onLogout = () => {
		dispatch(removeAuth());
		history.push("/account");
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
							<NavLink exact to="/products" activeClassName="active">
								Products
							</NavLink>
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
						<li onClick={onToggleNavMobile}>
							<NavLink exact to="/" activeClassName="active">
								Home
							</NavLink>
						</li>
						<li onClick={onToggleNavMobile}>
							<NavLink exact to="/products" activeClassName="active">
								Products
							</NavLink>
						</li>
						<li onClick={onToggleNavMobile}>
							<NavLink exact to="/about" activeClassName="active">
								About
							</NavLink>
						</li>
						<li onClick={onToggleNavMobile}>
							<NavLink exact to="/contact" activeClassName="active">
								Contact
							</NavLink>
						</li>
					</ul>
					{navmobile ? (
						<div className="navbar__close col m-5">
							<i className="fas fa-times" onClick={onToggleNavMobile}></i>
						</div>
					) : (
						<div className="navbar__bars col m-5">
							<i className="fas fa-bars" onClick={onToggleNavMobile}></i>
						</div>
					)}

					<Link to="/" className="navbar__logo col l-2 m-2">
						<img src={logoImage} alt="logo" />
					</Link>
					<ul className="navbar__control col l-5 m-5">
						<li className="navbar-search">
							<i className="fas fa-search" onClick={onShowSearchBar}></i>
						</li>

						{auth ? (
							<li className="navbar-account">
								<i className="fas fa-user"></i>
								<ul className="navbar-account__popup">
									<li>{auth.userName}</li>
									<li>
										<NavLink to="/orders">Orders</NavLink>
									</li>
									<li onClick={onLogout}>Logout</li>
								</ul>
							</li>
						) : (
							<li className="navbar-account">
								<NavLink exact to="/account">
									<i className="fas fa-user"></i>
								</NavLink>
							</li>
						)}

						<li className="navbar-cart" onClick={onShowCartModal}>
							<i className="fas fa-shopping-bag"></i>
							{cartcount ? <span>{cartcount}</span> : undefined}
						</li>
					</ul>
				</div>
			</div>
			<CartModal
				cartmodal={cartmodal}
				setCartmodal={setCartmodal}
				onCloseCartModal={onCloseCartModal}
			/>
			{searchBar && <SearchBar setSearchBar={setSearchBar} />}
		</header>
	);
}

export default Header;
