import React from 'react';
import degenFlipImg from '../../img/degen-flip-bot.webp';
import staking1 from '../../img/staking-1.webp';
import staking2 from '../../img/staking-2.webp';

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
						<h3>Unnoficial Degen Flip Bot</h3>
						<p>Win streaks for degens. 😎 Official #degen, unofficial bot.</p>
					</div>
					<div className="img">
						<img src={degenFlipImg} alt="" />
					</div>
				</div>
				<div className="card grid-2">
					<div className="content">
						<h4>Ubik NFT</h4>
						<h3>Staking Notification Bot</h3>
						<p>
							Celebrate every new sheep that gets staked in the farm with a new
							quote from the novel Ubik by Philip K. Dick.
						</p>
					</div>
					<div className="staking-img-container">
						<img src={staking1} alt="" />
						<img src={staking2} alt="" />
					</div>
				</div>
				<div className="card grid-2">
					<div className="content">
						<h3>Here’s some free αlpha</h3>
						<p>
							Say 👋 on our discord DMs and get a free 3 day trial on all of our
							Discord and Twitter Marketing bots.
						</p>
					</div>
					<div className="btn-container">
						<a
							href="https://discord.com/users/924803349319147620"
							rel="noreferrer"
							target="_blank"
						>
							Gimmie the free trial →
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default More;
