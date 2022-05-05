import React, { useRef, useState } from 'react';
import discordSale from '../../img/sales-demo.png';
import discordListing from '../../img/listings-demo.png';
import moonrankIcon from '../../img/favicon/moonrank.png';
import howrareIcon from '../../img/favicon/howrare.png';
import failImg from '../../img/whitelist/not-found.png';
import foundImg from '../../img/whitelist/found.png';
import sucessImg from '../../img/whitelist/sucess.png';
import instructionsImg from '../../img/whitelist/instructions.png';
import errorImg from '../../img/whitelist/error.png';

const Discord = () => {
	const [activeTab, setActiveTab] = useState('sales');
	const [wlSliderPosition, setWlSliderPosition] = useState(1);

	const indicator = useRef();
	const onToggle = (e) => {
		if (e.target.id === 'listings-bot') {
			indicator.current.classList.remove('left');
			indicator.current.classList.add('right');
			setActiveTab('listings');
		}
		if (e.target.id === 'sales-bot') {
			indicator.current.classList.remove('right');
			indicator.current.classList.add('left');

			setActiveTab('sales');
		}
	};

	return (
		<section className="section-discord">
			<h2 className="section-title">
				All of your collection’s data, straight in your Discord
			</h2>
			<div className="grid">
				<div className="discord-demo  holo">
					<div className="demo-toggle">
						<div className="toggle-btns" onChange={onToggle}>
							<input
								type="radio"
								className="toggle-btn"
								name="discord-bot"
								value="sales"
								id="sales-bot"
							/>
							<label
								htmlFor="sales-bot"
								className={activeTab === 'sales' ? 'active' : ''}
							>
								💸
							</label>
							<input
								type="radio"
								name="discord-bot"
								value="listings"
								className="toggle-btn"
								id="listings-bot"
							/>
							<label
								htmlFor="listings-bot"
								className={activeTab === 'listings' ? 'active' : ''}
							>
								🏷
							</label>
						</div>
						<div className="toggle-indicator-container">
							<div ref={indicator} className="toggle-indicator left"></div>
						</div>
					</div>
					<div className="content">
						<h3>Sales & Listings Bots</h3>
						<p>
							Your latest sales and listings with actionable data for your
							collectors. They go BRR when your collection does.
						</p>
					</div>
					<div className="demo-img-container">
						<img
							className={activeTab === 'sales' ? 'demo-img active' : 'demo-img'}
							src={discordSale}
							alt=""
						/>
						<img
							className={
								activeTab === 'listings' ? 'demo-img active' : 'demo-img'
							}
							src={discordListing}
							alt=""
						/>
					</div>
				</div>
				<div className="grid-card">
					<div className="grid-icon">
						<img src={moonrankIcon} alt="" />
						<img src={howrareIcon} alt="" />
					</div>
					<div className="content">
						<h3>Rarity & Rank</h3>
						<p>
							Everyone wants a rare in their bag. Find the rarest traits of each
							NFT and links to Moonrank or Howrare straight from your post.{' '}
						</p>
					</div>
				</div>
				<div className="grid-card">
					<div className="grid-icon">🤝</div>
					<div className="content">
						<h3>Mint Token & Transaction</h3>
						<p>
							Verify each transaction via Solscan or Solana Explorer, and view
							all of the NFT’s metadata right on chain.{' '}
						</p>
					</div>
				</div>
				<div className="grid sub-grid">
					<div className="grid-card">
						<div className="grid-icon">🧹</div>
						<div className="content">
							<h3>Floor Price</h3>
							<p>
								Display your collection’s floor price from different
								marketplaces.
							</p>
						</div>
					</div>
					<div className="grid-card blue-gradient">
						<div className="grid-icon">🩻</div>
						<div className="content">
							<h3>X-Ray</h3>
							<p>
								Peek into the buyer or seller’s wallet and see what else they’re
								holding!
							</p>
						</div>
					</div>
					<div className="grid-card">
						<div className="grid-icon">💸</div>
						<div className="content">
							<h3>Quick Buy</h3>
							<p>
								A <span className="holo-link">Buy Now</span> link straight in
								your discord so you can snipe away!
							</p>
						</div>
					</div>
				</div>
				<div className="grid-card grid-5 discord-whitelist">
					<div className="content">
						<div>
							<div className="grid-icon">🗒</div>
							<h3>Smart Wallet Collection Bot</h3>
							<p>
								Collect the wallet addresses of your members for white lists or
								other rewards. Save time with a smart bot that your everyone
								will understand.
							</p>
						</div>
					</div>
					<div className="wallet-collection-demo">
						<div className="wallet-collection-slider">
							<div className="wallet-collection-slider-indicator">
								<span
									className={
										wlSliderPosition === 1 ? 'indicator active' : 'indicator'
									}
									onClick={() => {
										setWlSliderPosition(1);
									}}
								>
									📖
								</span>
								<span
									className={
										wlSliderPosition === 2 ? 'indicator active' : 'indicator'
									}
									onClick={() => {
										setWlSliderPosition(2);
									}}
								>
									✅
								</span>
								<span
									className={
										wlSliderPosition === 3 ? 'indicator active' : 'indicator'
									}
									onClick={() => {
										setWlSliderPosition(3);
									}}
								>
									⚠️
								</span>
								<span
									className={
										wlSliderPosition === 4 ? 'indicator active' : 'indicator'
									}
									onClick={() => {
										setWlSliderPosition(4);
									}}
								>
									❗️
								</span>
							</div>
							<div className="slider-toggle">
								<div
									className={`slider-toggle-indicator position-${wlSliderPosition}`}
								></div>
							</div>
						</div>
						<div className="wallet-collection-img">
							<div
								className={
									wlSliderPosition === 1
										? 'wl-img img-group'
										: 'hidden wl-img img-group'
								}
							>
								<h4>Simple instructions</h4>
								<img src={instructionsImg} alt="" />
							</div>
							<div
								className={
									wlSliderPosition === 2
										? 'wl-img img-group'
										: 'hidden wl-img img-group'
								}
							>
								<h4>Success notifications & check command</h4>
								<img src={sucessImg} alt="" />
								<img src={foundImg} alt="" />
							</div>
							{/* <img
									className={
										wlSliderPosition === 2 ? 'wl-img' : 'hidden wl-img'
									}
									src={sucessImg}
									alt=""
								/> */}
							<div
								className={
									wlSliderPosition === 3
										? 'wl-img img-group'
										: 'hidden wl-img img-group'
								}
							>
								<h4>Action needed notifications</h4>
								<img src={failImg} alt="" />
							</div>
							<div
								className={
									wlSliderPosition === 4
										? 'wl-img img-group'
										: 'hidden wl-img img-group'
								}
							>
								<h4>Invalid submission notifications</h4>
								<img src={errorImg} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Discord;
