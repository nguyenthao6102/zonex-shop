import React from "react";
import HomeProducts from "../components/HomeProducts";
import SliderBaner from "../components/SliderBaner";
import TopicBottom from "../components/TopicBottom";
import TopicTop from "../components/TopicTop";

function HomePage(props) {
	return (
		<>
			<SliderBaner />
			<TopicTop />
			<HomeProducts />
			<TopicBottom />
		</>
	);
}

export default HomePage;
