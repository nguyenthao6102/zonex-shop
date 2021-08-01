import React from "react";
import "./index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderBaner() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	return (
		<Slider {...settings} className="slider-wrap">
			<div className="slider-1">
				<div className="slider-1__caption">
					<h1>New In Spring Wear</h1>
					<h5>
						Discover new ways to dress this spring with a selection of the best
						designer jacket
					</h5>
				</div>
			</div>
			<div className="slider-2">
				<div className="slider-2__caption">
					<h1>Fall-Winter Clearance Sales</h1>
					<h5>All sale items are Final Sale / FreeShipping on All Orders</h5>
				</div>
			</div>
			<div className="slider-3">
				<div className="slider-3__caption">
					<h1>They're buying into this season</h1>
					<h5>Because it means summer's officially over (boooo!).</h5>
				</div>
			</div>
		</Slider>
	);
}

export default SliderBaner;
