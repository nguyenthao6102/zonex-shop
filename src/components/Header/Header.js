import React from "react";
import PropTypes from "prop-types";
import logoImage from "../../assets/images/logo.png";
import "./Header.scss";

Header.propTypes = {};

function Header(props) {
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
					<div className="navbar__bars col m-5">
						<i class="fas fa-bars"></i>
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
						<li>
							<i className="fas fa-shopping-bag"></i>
							<span>3</span>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
