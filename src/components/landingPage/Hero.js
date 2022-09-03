import React from 'react';
import { Link } from 'react-router-dom';
import twitterLogo from '../../img/twitter-white.svg';
import twitterScreen from '../../img/tweet-screenshot.webp';
import discordLogo from '../../img/Discord-Logo-White.svg';
import discordListing from '../../img/discord-sale.webp';
import discordSale from '../../img/listings-demo.webp';

const Hero = () => {
	return (
		<header className="hero-container">
			<div className="hero-content">
				<h1>Let your collection's most relevant stats do the talking</h1>
				<p>
					Twitter and Discord bots that make sure your community never misses
					their latest milestones. Always have something new to retweet and
					celebrate while you focus on building!
				</p>

				<Link to="/signup" className="btn-cta p-xl">
					Sign up now →
				</Link>
				<span className="text-xs">
					5 minute setup. Deploy instantly. No glass eating required.
				</span>
				<div className="grid-2 m-xl">
					<div className="hero-tweet">
						<img
							src={twitterLogo}
							className="twitter-bird m-md"
							alt="twitter logo"
						/>
						<img className="hero-twitter-img" src={twitterScreen} alt="tweet" />
					</div>
					<div className="hero-discord ">
						<img
							className="discord-logo m-md"
							src={discordLogo}
							alt="discord logo"
						/>
						<div className="hero-discord-img">
							<img src={discordSale} alt="Okay bear sale" />
							<img src={discordListing} alt="Okay Bear Listing" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hero;
