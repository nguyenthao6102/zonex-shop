import React from "react";
import Slider from "../components/Slider/Slider";
import Topic from "../components/Topic/Topic";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";

function HomePage(props) {
	return (
		<>
			<Slider />
			<Topic />
			<FeaturedProducts />
		</>
	);
}

export default HomePage;
