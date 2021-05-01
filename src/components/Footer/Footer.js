import "./Footer.scss";
import React from "react";

function Footer(props) {
	return (
		<footer className="footer grid wide">
			<div className="row pt-80 pb-80 boder-bottom">
				<div className="footer__contact col l-3 m-3 c-12">
					<h3>CUSTOMER SERVICE</h3>
					<ul>
						<li>Phone: +866.597.2742</li>
						<li>Live chat</li>
						<li>About Us</li>
						<li>Term &amp; conditions</li>
					</ul>
				</div>
				<div className="footer__contact col l-3 m-3 c-12">
					<h3>COMPANY</h3>
					<ul>
						<li>What We Do</li>
						<li>Available Services</li>
						<li>Latest Posts</li>
						<li>FAQs</li>
					</ul>
				</div>
				<div className="footer__join col l-6 m-6 c-12">
					<h3>OUR NEWSLETTER</h3>
					<p>Join our list and get 15% off your first purchase!</p>
					<div>
						<input type="text" name="email" placeholder="Email Address" />
						<button>Subscribe</button>
					</div>
					<p>*Don’t worry we don’t spam</p>
				</div>
			</div>
			<div className="row pt-30 pb-30">
				<div className="footer__policy col l-6 m-6 c-12">
					<ul>
						<li>Returns Policy</li>
						<li>Track Your Order</li>
						<li>Shipping &amp; Delivery</li>
					</ul>
				</div>
				<div className="footer__social col l-6 m-6 c-12">
					<li>
						<i className="fab fa-facebook-square"></i>
					</li>
					<li>
						<i className="fab fa-twitter"></i>
					</li>
					<li>
						<i className="fab fa-instagram"></i>
					</li>

					<li>
						<i className="fab fa-pinterest-p"></i>
					</li>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
