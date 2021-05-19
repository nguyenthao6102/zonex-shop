import React from "react";
import "./About.scss";
import weAre from "../../assets/images/we-are.png";
import servicesIcon1 from "../../assets/images/ic-1.png";
import servicesIcon2 from "../../assets/images/ic-2.png";
import servicesIcon3 from "../../assets/images/ic-3.png";

function About() {
	return (
		<div className="about">
			<div className="about-banner">
				<div className="about-banner__content">
					<img src={weAre} alt="we are" />
					<h1>Zonex store</h1>
					<p>
						La croix blog sriracha, distillery ugh small batch retro literally
						coloring book disrupt iceland migas austin gochujang affogato.
						Edison bulb butcher wayfarers pug. Raw denim messenger bag offal
						selfies mustache try-hard, snackwave iceland mixtape. La croix blog
						sriracha, distillery ugh small batch retro literally.
					</p>
				</div>
			</div>
			<div className="about-intro">
				<div className="grid wide">
					<div className="row">
						<h6 className="col l-4 m-4 c-12">
							We are the best technology firm & Art design
						</h6>
						<p className="col l-4 m-4 c-12">
							<span>W</span>
							ith all his cruel ferocity and coldness there was an under of
							something in Tars Tarkas which he seemed ever battling to subdue.
							Could it be a vestige of some human instinct come back from an
							ancient forbear to haunt him with the horror of his people’s ways!
							As I was approaching Dejah Thoris’ chariot I passed Sarkoja, and
							the black, venomous look she accorded me was the sweetest almost
							have
						</p>
						<p className="col l-4 m-4 c-12">
							cut it with a sword. A few moments later I saw her deep in
							conversation with a warrior named Zad. Were you to give me your
							word that neither you nor Dejah Thoris would attempt to escape
							until after we have safely reached the court of Tal Hajus you
							might have the key and throw the chains into the river Iss. As I
							was approaching Dejah Thoris’ chariot I passed Sarkoja, and the
							black, venomous look she accorded me.
						</p>
					</div>
				</div>
			</div>
			<div className="about-services grid wide">
				<h6 className="services-title">Featured Services</h6>
				<div className="services-content row">
					<div className="services-content__group col l-4 m-12 c-12">
						<img src={servicesIcon1} alt="services icon 1" />
						<h4>We pride ourselves on innovative.</h4>
						<p>
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia, there live the blind texts. Separated
							they live.
						</p>
						<button>LEARN MORE</button>
					</div>
					<div className="services-content__group col l-4 m-12 c-12">
						<img src={servicesIcon2} alt="services icon 2" />
						<h4>We won many awards.</h4>
						<p>
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia, there live the blind texts. Separated
							they live.
						</p>
						<button>LEARN MORE</button>
					</div>
					<div className="services-content__group col l-4 m-12 c-12">
						<img src={servicesIcon3} alt="services icon 3" />
						<h4>We are a team of genius people.</h4>
						<p>
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia, there live the blind texts. Separated
							they live.
						</p>
						<button>LEARN MORE</button>
					</div>
				</div>
			</div>
			<div className="about-award">
				<div className="about-award__bg">
					<h6>Award Winnings</h6>
				</div>
				<div className="about-award__content grid wide">
					<div className="row">
						<div className="about-award__group col l-4 m-4 c-12">
							<div className="about-award__item">
								<h4>Innovative Design Award 2017</h4>
								<h6>FIRST RUNNER UP</h6>
							</div>
							<div className="about-award__item">
								<h4>Clever Structure Award 2016</h4>
								<h6>FIRST PLACE</h6>
							</div>
							<div className="about-award__item">
								<h4>Best Engineering Design 2016</h4>
								<h6>THIRD PLACE</h6>
							</div>
							<div className="about-award__item">
								<h4>Environment Heart Award 2016</h4>
								<h6>THIRD PLACE</h6>
							</div>
						</div>
						<div className="about-award__group col l-4 m-4 c-12">
							<div className="about-award__item">
								<h4>Innovative Design Award 2017</h4>
								<h6>FIRST RUNNER UP</h6>
							</div>
							<div className="about-award__item">
								<h4>Clever Structure Award 2016</h4>
								<h6>FIRST PLACE</h6>
							</div>
							<div className="about-award__item">
								<h4>Best Engineering Design 2016</h4>
								<h6>THIRD PLACE</h6>
							</div>
							<div className="about-award__item">
								<h4>Environment Heart Award 2016</h4>
								<h6>THIRD PLACE</h6>
							</div>
						</div>
						<div className="about-award__group col l-4 m-4 c-12">
							<div className="about-award__item">
								<h4>Innovative Design Award 2017</h4>
								<h6>FIRST RUNNER UP</h6>
							</div>
							<div className="about-award__item">
								<h4>Clever Structure Award 2016</h4>
								<h6>FIRST PLACE</h6>
							</div>
							<div className="about-award__item">
								<h4>Best Engineering Design 2016</h4>
								<h6>THIRD PLACE</h6>
							</div>
							<div className="about-award__item">
								<h4>Environment Heart Award 2016</h4>
								<h6>THIRD PLACE</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
