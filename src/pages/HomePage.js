import React from "react";
import SliderBaner from "../components/SliderBaner";
import TopicTop from "../components/TopicTop";
import HomeProducts from "../components/HomeProducts";
import TopicBottom from "../components/TopicBottom";

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
