import React, { useContext, useEffect, useState, useRef } from 'react';
import { htmlToText } from 'html-to-text';
import twitter from 'twitter-text';

import './TwitterSalesMockup.css';

import moonbotsLogo from './../../img/favicon/moonbots.png';
import heartIcon from './../../img/favicon/twitterIcons/heart.svg';
import commentIcon from './../../img/favicon/twitterIcons/comment.svg';
import optionsIcon from './../../img/favicon/twitterIcons/options.svg';
import saveIcon from './../../img/favicon/twitterIcons/save.svg';

import { UserContext } from '../internal/newUser/UserProvider';

const TweetDemo = ({ content, type = 'normal' }) => {
	const [image, setImage] = useState(null);
	const [summaryImage, setSummaryImage] = useState(null);
	const userContext = useContext(UserContext);
	const normalTweet = useRef(null);

	const capitalize = (name) => {
		if (!name) return;
		return name
			.split('_')
			.map((w) => w[0].toUpperCase() + w.slice(1))
			.join(' ');
	};

	const collectionName = capitalize(userContext.name) || '';
	const floor = 100;
	const priceUSD = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'usd',
		maximumFractionDigits: 2,
	}).format(80 * 100);
	const price = `100.0Ⓞ  (${priceUSD})`;

	const jsonToHtml = (text) => {
		let myText = text
			.replaceAll('\n', '<br/>')
			.replace('{{PRICE}}', price)
			.replace('{{NFT}}', `${userContext.name || 'SMB'} #3028`)
			.replace('{{PLURAL}}', userContext.plural_of_nft || 'Monkes')
			.replace('{{NUM}}', '69')
			.replace(
				'{{TWITTER}}',
				`<span style="color: rgb(29, 155, 240);cursor: pointer; font-family: sans-serif" >@${collectionName.replace(
					' ',
					''
				)}SalesBot</span>`
			)

			.replace(
				'{{TXURL}}',
				'<span style="color: rgb(29, 155, 240);  cursor: pointer; font-family: sans-serif" >https://solscan.co/7fesefggrgrdt</span>'
			)
			.split(' ')
			.map((w) =>
				w.includes('#') && isNaN(w[1])
					? `<span style="color: rgb(29, 155, 240); font-family: sans-serif ; cursor: pointer" >${
							w + ' '
					  }</span>`
					: w
			)
			.join(' ');
		return myText;
	};

	useEffect(() => {
		if (userContext.media && !summaryImage) {
			setSummaryImage(URL.createObjectURL(userContext.media));
		}
	});

	return (
		<div className="tweet-wrapper">
			{normalTweet.current &&
				!twitter.parseTweet(htmlToText(normalTweet.current.innerHTML))
					.valid && (
					<span>
						{JSON.stringify(
							twitter.parseTweet(htmlToText(normalTweet.current.innerHTML)),
							null,
							4
						)}
					</span>
				)}

			<div className="tweet-header">
				<div className="profile-pic-bg">
					<img src={moonbotsLogo} alt="profile image" className="profile-pic" />
				</div>
				<div className="user-data">
					<h3 className="user-name">{collectionName} Sales Bot</h3>
					<span className="user-handle">
						@{collectionName.replace(' ', '')}SalesBot
					</span>
				</div>
			</div>
			<div ref={normalTweet} className="tweet-content">
				<p
					style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
					dangerouslySetInnerHTML={{ __html: jsonToHtml(content) }}
				></p>
				<p className="marketplace-link">
					Grab yours on Magic Eden:
					<br />
					<span
						style={{
							color: 'rgb(29, 155, 240)',
							fontFamily: 'sans-serif',
							cursor: 'pointer',
						}}
					>
						https://t.co/7Sc4Gk4ktt
					</span>
				</p>
				{type === 'normal'
					? image && <img src={image} alt="collection image" />
					: summaryImage && <img src={summaryImage} alt="summary image" />}
				{!image && type !== 'summary' && (
					<input
						type="file"
						onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
					/>
				)}
			</div>
			<div className="footer">
				<div className="social-icons">
					<img src={heartIcon} alt="heart" />
					<img src={optionsIcon} alt="retweet" />
					<img src={commentIcon} alt="comment" />
					<img src={saveIcon} alt="save" />
				</div>
			</div>
		</div>
	);
};

export default TweetDemo;
