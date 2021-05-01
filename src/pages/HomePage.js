import React from "react";
import Header from "../components/Header/Header";
import Slider from "../components/Panel/Slider";
import Topic from "../components/Topic/Topic";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";

function HomePage(props) {
	return (
		<>
			<Header />
			<Slider />
			<Topic />
			<Products />
			<Cart />
			<Footer />
		</>
	);
}

export default HomePage;
