import React, { useContext, useEffect, useState, useRef } from 'react';
import { htmlToText } from 'html-to-text';
import twitter from 'twitter-text';

import './TwitterSalesMockup.css';

import moonbotsLogo from './../../img/favicon/moonbots.webp';
import heartIcon from './../../img/favicon/twitterIcons/heart.svg';
import commentIcon from './../../img/favicon/twitterIcons/comment.svg';
import optionsIcon from './../../img/favicon/twitterIcons/options.svg';
import saveIcon from './../../img/favicon/twitterIcons/save.svg';

import { CollectionContext } from '../../contextProviders/CollectionProvider';
import { AppContext } from '../../contextProviders/AppProvider';
import { CircularProgress } from '@mui/material';

const TweetDemo = ({ content, type = 'normal' }) => {
	const app = useContext(AppContext);
	const [summaryImage, setSummaryImage] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const collection = useContext(CollectionContext);
	const [image, setImage] = useState(collection.img);
	const normalTweet = useRef(null);

	useEffect(() => {
		if (!collection.media && summaryImage) {
			return setSummaryImage(URL.createObjectURL(collection.media));
		}
		if (collection.img) {
			setIsLoading(false);
			return setImage(collection.media);
		}
	}, [collection, summaryImage]);

	const capitalize = (name) => {
		if (!name) return;
		return name
			.split('_')
			.map((w) => w[0].toUpperCase() + w.slice(1))
			.join(' ');
	};

	const collectionName = capitalize(collection.collection) || '';
	const priceUSD = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'usd',
		maximumFractionDigits: 2,
	}).format(app?.solana?.usd * collection.price);

	const price = `${collection?.price?.toFixed(2) || ''}Ⓞ (${priceUSD || ''})`;

	const jsonToHtml = (text) => {
		let myText = text
			.replace('{{PRICE}}', price)
			.replace('{{NFT}}', `${collection.name || ''} `)
			.replace('{{PLURAL}}', capitalize(collection.pluralOfNft) || '')
			.replace('{{NUM}}', '69')
			.replaceAll('<', '')
			.replaceAll('>', '')
			.replaceAll('\n', '<br/>')
			.replace(
				'{{MARKETPLACE}}',
				`Grab yours on Magic Eden: <a about="_blank" target="nonrefferer" href=https://magiceden.io/item-details/${collection.tokenMint} style="color: rgb(29, 155, 240);  cursor: pointer; font-family: sans-serif" >magiceden.io/marketplace/...</a>`
			)
			.replace(
				'{{TWITTER}}',
				`<span style="color: rgb(29, 155, 240);cursor: pointer; font-family: sans-serif" >@${collectionName.replace(
					' ',
					''
				)}SalesBot</span>`
			)

			.replace(
				'{{TXURL}}',
				`<a href='https://solscan.io/tx/${collection.transaction_id}' about="_blank" target="nonrefferer" style="color: rgb(29, 155, 240);  cursor: pointer; font-family: sans-serif" >https://solscan.co/7fesefggrgrdt</a>`
			);

		// fixme: Turned off hashtag highlighting for now.
		// myText.match(/\W(\#[a-zA-Z]+\b)(?!;)/gm).forEach((w) => {
		// 	// console.log(w);
		// 	myText.replace(
		// 		w,
		// 		`<span style="color: rgb(29, 155, 240);  cursor: pointer; font-family: sans-serif" >${w}</span>`
		// 	);
		// });

		return myText;
	};

	return (
		<>
			{isLoading && <CircularProgress />}
			{!isLoading && (
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
							<img src={moonbotsLogo} alt="profile" className="profile-pic" />
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
						<div className="tweet-img">
							{type === 'normal'
								? image && <img src={image} alt="collection" />
								: summaryImage && <img src={summaryImage} alt="summary" />}
						</div>
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
			)}
		</>
	);
};

export default TweetDemo;
