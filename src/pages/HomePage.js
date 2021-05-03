import React from "react";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Panel/Slider";
import Products from "../components/Products/Products";
import Topic from "../components/Topic/Topic";

function HomePage(props) {
	return (
		<>
			<Slider />
			<Topic />
			<Products />
			<Footer />
		</>
	);
}

export default HomePage;
