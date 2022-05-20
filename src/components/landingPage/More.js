import React from 'react';

const More = () => {
	return (
		<section className="section-more">
			<h2 className="section-title">Have something else in mind?</h2>
			<p className="section-description">
				Every community deserves something special... Feel free to reach out for
				any custom project you have in mind. Here are some of our favorites.
			</p>
			<div className="card-container">
				<div className="card grid-2">
					<div className="content">
						<h4>@DegenFlipBot</h4>
						<h3>Unofficial Degen Flip Bot</h3>
						<p>Win streaks for degens. 😎 Official #degen, unofficial bot.</p>
					</div>
					<div className="img">
						<img
							src="https://moonstore.fra1.cdn.digitaloceanspaces.com/web/degen-flip-bot.webp"
							alt=""
						/>
					</div>
				</div>
				<div className="card grid-2">
					<div className="content">
						<h4>Ubik NFT</h4>
						<h3>Staking Notification Bot</h3>
						<p>
							Celebrates every new sheep that gets staked in the farm with a new
							quote from the novel Ubik by Philip K. Dick.
						</p>
					</div>
					<div className="staking-img-container">
						<img
							src="https://moonstore.fra1.cdn.digitaloceanspaces.com/web/staking-1.webp"
							alt=""
						/>
						<img
							src="https://moonstore.fra1.cdn.digitaloceanspaces.com/web/staking-2.webp"
							alt=""
						/>
					</div>
				</div>
				<div className="card grid-2">
					<div className="content">
						<h3>Here’s some free αlpha</h3>
						<p>
							Say 👋 in our discord DMs and get a free 3 day trial on all of our
							Discord and Twitter Marketing bots.
						</p>
					</div>
					<div className="btn-container">
						<a
							href="https://discord.com/users/924803349319147620"
							rel="noreferrer"
							target="_blank"
						>
							Gimme the free trial →
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default More;
