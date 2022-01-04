import React from 'react';
import logo from '../img/moonbots-logo.svg';
import twitterIcon from '../img/twitter-white.svg';

const Navbar = () => {
	return (
		<div className="nav">
			<div className="logo-wrapper">
				<a href="/">
					<img className="logo" src={logo} alt="moonbots logo" />
				</a>
			</div>
			<ul className="main-menu">
				<a href="https://twitter.com/WenMoonBots">
					<li className="menu-item">
						<img
							src={twitterIcon}
							alt="twitter icon"
							className="twitter-icon"
						/>
					</li>
				</a>
			</ul>
		</div>
	);
};

export default Navbar;
