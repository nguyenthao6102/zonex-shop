import React from "react";
import SliderBaner from "../components/SliderBaner/SliderBaner";
import TopicTop from "../components/TopicTop/TopicTop";
import HomeProducts from "../components/HomeProducts/HomeProducts";
import TopicBottom from "../components/TopicBottom/TopicBottom";

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
