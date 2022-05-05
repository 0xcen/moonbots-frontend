import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/moonbots-logo.svg';
import discordLogo from '../img/Discord-Logo-White.svg';
import twitterLogo from '../img/twitter-white.svg';

const Footer = () => {
	return (
		<footer>
			<div className="grid-3">
				<div className="footer-left">
					<img className="logo" src={logo} alt="" />
					<h3>Get in touch</h3>
					<div className="footer-social-icons">
						<a
							href="https://twitter.com/WenMoonBots"
							target="_blank"
							rel="noreferrer"
						>
							<img src={twitterLogo} alt="" />
						</a>
						<a
							href="https://discord.com/users/924803349319147620"
							target="_blank"
							rel="noreferrer"
						>
							<img src={discordLogo} alt="" />
						</a>
					</div>
					<span>&#169; {new Date().getFullYear()} MoonBots</span>
				</div>
				<div className="footer-menu">
					<div>
						<h3>Already a Customer?</h3>
						<ul>
							<li>
								<Link to="/dashboard">Dashboard</Link>
							</li>
							<li>
								<Link to="/settings">Settings</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3>More important things</h3>
						<ul>
							<li>
								<Link to="/security">Security</Link>
							</li>
							<li>
								<Link to="/toc">Terms & Conditions</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
