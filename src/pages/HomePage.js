import React from "react";
import SliderBaner from "../components/SliderBaner/SliderBaner";
import TopicTop from "../components/TopicTop/TopicTop";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import TopicBottom from "../components/TopicBottom/TopicBottom";

function HomePage(props) {
	return (
		<>
			<SliderBaner />
			<TopicTop />
			<FeaturedProducts />
			<TopicBottom />
		</>
	);
}

export default HomePage;
