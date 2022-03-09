import React from 'react';
import { date } from 'yup';
import profileImg from './../../img/moonbots-logo.svg';
import nftImg from './../../temp/authorImg.png';
import heartIcon from './../../img/favicon/twitterIcons/heart.svg';
import commentIcon from './../../img/favicon/twitterIcons/comment.svg';
import optionsIcon from './../../img/favicon/twitterIcons/options.svg';
import saveIcon from './../../img/favicon/twitterIcons/save.svg';
import './TwitterSalesMockup.css';

const TwitterSalesMockup = ({ props }) => {
	const capitalize = (name) => {
		return name
			.split('_')
			.map((w) => w[0].toUpperCase() + w.slice(1))
			.join(' ');
	};
	if (!props) return null;
	const collectionName = capitalize(props.collection_symbol);
	const floor = props.floorPrice / 1000000000;
	const price = props.parsedTransaction.total_amount / 1000000000;
	const priceUSD = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'usd',
		maximumFractionDigits: 2,
	}).format(props.usd * price);

	console.log(props);
	const displayRank = () => {
		let rank = '';
		if (Object.keys(props.mintObject.rarity).length === 0) return null;
		if (props.mintObject.rarity.moonrank.rank)
			rank = props.mintObject.rarity.moonrank.rank;
		else if (props.mintObject.rarity.howRare.rank)
			rank = props.mintObject.rarity.howRare.rank;
		return rank ? `Rank #${rank}` : null;
	};

	return (
		<div className='tweet-wrapper'>
			<div className='tweet-header'>
				<div className='profile-pic-bg'>
					<img
						src={props.image}
						alt='profile image'
						className='profile-pic'
					/>
				</div>
				<div className='user-data'>
					<h3 className='user-name'>{collectionName} Sales Bot</h3>
					<span className='user-handle'>
						@{collectionName.replace(' ', '')}SalesBot
					</span>
				</div>
			</div>
			<div className='tweet-content'>
				<p>
					🤖 {props.mintObject.title}
					<br />
					{displayRank()}
					<br />
					<br />
					💵 SOLD for {price.toFixed(2)}Ⓞ ({priceUSD})
					<br />
					<br />
					🧹 Floor Price is now: {floor.toFixed(2)}Ⓞ
					<br />
					<br />
				</p>
				<p className='marketplace-link'>
					Grab yours on Magic Eden:{' '}
					<a
						href={`https://magiceden.io/marketplace/${props.collection_symbol}`}
						target='_blank'
						rel='noreferrer'>
						https://t.co/7Sc4Gk4ktt
					</a>
				</p>
				<img src={props.mintObject.img} alt='nft-img' />
			</div>
			<div className='footer'>
				<div className='social-icons'>
					<img src={heartIcon} alt='heart' />
					<img src={optionsIcon} alt='retweet' />
					<img src={commentIcon} alt='comment' />
					<img src={saveIcon} alt='save' />
				</div>
			</div>
		</div>
	);
};

export default TwitterSalesMockup;
