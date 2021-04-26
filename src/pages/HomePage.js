import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Slider from "../components/Panel/Slider";
import Topic from "../components/Topic/Topic";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";

HomePage.propTypes = {};

function HomePage(props) {
	return (
		<>
			<Header />
			<Slider />
			<Topic />
			<Products />
			<Footer />
		</>
	);
}

export default HomePage;
