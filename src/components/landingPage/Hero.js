import React from 'react';
import { Link } from 'react-router-dom';
import tweetScreenshot from '../../img/astrals-twitter-bot.webp';
import twitterBird from '../../img/twitter-white.svg';
import discordLogo from '../../img/Discord-Logo-White.svg';
import discordSales from '../../img/okayBear-sale.webp';
import discordListings from '../../img/okayBear-listing.webp';

const Hero = () => {
	return (
		<div className="hero-container">
			<div className="hero-content">
				<h1>Let your collection's most relevant stats do the talking</h1>
				<p>
					Twitter and Discord bots that make sure your community never misses
					their latest milestones. Always have something new to retweet and
					celebrate while you focus on building!
				</p>

				<Link to="/sign-up" className="btn-cta p-xl">
					Sign up now →
				</Link>
				<span className="text-xs">
					5 minute setup. Deploy instantly. No glass eating required.
				</span>
				<div className="grid-2 m-xl">
					<div className="hero-tweet">
						<img
							src={twitterBird}
							className="twitter-bird m-md"
							alt="twitter logo"
						/>
						<img
							className="hero-twitter-img"
							src={tweetScreenshot}
							alt="tweet"
						/>
					</div>
					<div className="hero-discord ">
						<img className="discord-logo m-md" src={discordLogo} alt="" />
						{/* add discord examples */}
						<div className="hero-discord-img">
							<img src={discordSales} alt="" />
							<img src={discordListings} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
