import React from 'react';
import { Link } from 'react-router-dom';

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

				<Link to="/signup" className="btn-cta p-xl">
					Sign up now →
				</Link>
				<span className="text-xs">
					5 minute setup. Deploy instantly. No glass eating required.
				</span>
				<div className="grid-2 m-xl">
					<div className="hero-tweet">
						<img
							src="https://moonstore.fra1.cdn.digitaloceanspaces.com/web/twitter-white.svg"
							className="twitter-bird m-md"
							alt="twitter logo"
						/>
						<img
							className="hero-twitter-img"
							src="https://moonstore.fra1.cdn.digitaloceanspaces.com/web/tweet-screenshot.webp"
							alt="tweet"
						/>
					</div>
					<div className="hero-discord ">
						<img
							className="discord-logo m-md"
							src="https://moonstore.fra1.cdn.digitaloceanspaces.com/web/Discord-Logo-White.svg"
							alt="discord logo"
						/>
						<div className="hero-discord-img">
							<img
								src="https://moonstore.fra1.digitaloceanspaces.com/web/okayBear-sale.webp"
								alt="Okay bear sale"
							/>
							<img
								src="https://moonstore.fra1.cdn.digitaloceanspaces.com/web/okayBear-listing.webp"
								alt="Okay Bear Listing"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
