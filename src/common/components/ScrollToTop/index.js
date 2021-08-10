import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.scss";

function ScrollToTop(props) {
	const [isVisible, setIsVisible] = useState(false);
	const { pathname } = useLocation();

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {
		const showScrollToTopBtn = () => {
			window.pageYOffset > 400 ? setIsVisible(true) : setIsVisible(false);
		};

		window.addEventListener("scroll", showScrollToTopBtn);
		return () => {
			window.removeEventListener("scroll", showScrollToTopBtn);
		};
	}, []);

	return (
		<div className="scroll-wrap">
			{isVisible && (
				<div className="scroll-btn" onClick={scrollToTop}>
					<i className="fas fa-long-arrow-alt-up"></i>
				</div>
			)}
		</div>
	);
}

export default ScrollToTop;
