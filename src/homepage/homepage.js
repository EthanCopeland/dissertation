import React from 'react';
import './homepage.css';
import logo from '../images/ellipse-1.png';
import logo1 from '../images/ellipse-2.png';
import logo2 from '../images/ellipse-3.png';

function Homepage() {
	return (
		<div id="homepage">
			<div id="content" className="pure-u-3-5">
				<h1>Welcome to Polar</h1>
				<p id="welcome-paragraph">
					<b> Disclaimer </b>: <br /> This is a sandbox website developed for a University Individual Project. Please respect the limitations of the project and enjoy your visit to Polar Clothing which contains fictional information. <br /> <br />Polar Clothing is our business and it is a new and exponentially growing winter accessory e-commerce store. We want to provide you with the comfiest winter clothes without breaking the bank, and we know that everyone wants to find a good deal. We also offer gift sets so that you and anyone else can enjoy our top-quality accessories this winter and have a festive experience.
                </p>
			</div>

			<section className="parallax">
				<div className="parallax">
					<h1 id="parallax-h1">Who are we and what are we doing?</h1>
				</div>
			</section>

			<div id="content" className="pure-u-3-5">
				<h1 id="light">Our Model</h1>
				<p id="welcome-paragraph">
					Our business model is to provide the best experience for you as a customer, and at the end of the day to make sure you enjoy your visit and come back again to see us. we'll still be here for sure but we understand there is a lot of stuff out there you want to buy.
                </p>

				<div id ="circles">
				<img src={logo} alt="ellipse" id="ellipse-1" className="pure-u-1-3" /> 
				<img src={logo1} alt="ellipse" id="ellipse-2" className="pure-u-1-3" /> 
				<img src={logo2} alt="ellipse" id="ellipse-3" className="pure-u-1-3" />
				</div>

				<div className="column">Have a browse around and see if there is anything you like </div>
				<div className="column">We will send out your products as soon as we receive the purchase notification</div>
				<div className="column">If you don't like the product you can receive a refund or exchange for another product</div>
			</div>

			<section className="parallax1">
				<div className="parallax">
					<h1 id="parallax-h1">Our Aims and Ethics</h1>
				</div>
			</section>

			<div id="content" className="pure-u-3-5">
				<p id="welcome-paragraph">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
				<p id="welcome-paragraph">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
				</div>

		</div>
	);
}

export default Homepage;