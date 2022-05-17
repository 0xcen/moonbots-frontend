import React, { useState, useContext } from 'react';
import axios from 'axios';
import TweetDemo from '../TwitterDemo/TweetDemo';
import { UpdateCollectionContext } from '../../contextProviders/CollectionProvider';
import { TextField } from '@mui/material';

const Twitter = () => {
	const [tweetText, setTweetText] = useState(
		'💫 {{NFT}} \n\n💰 SOLD for {{PRICE}} \n\n🚀 #LFG \n\n🪐 {{TXURL}} \n\n 🛒 {{MARKETPLACE}}'
	);
	const [active, setActive] = useState(false);
	const [popupState, setPopupState] = useState(false);
	const goodURL = 'https://magiceden.io/marketplace/';

	const windowSize = window.screen.width;
	const setCollection = useContext(UpdateCollectionContext);

	const getNextCollection = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);

		const formProps = Object.fromEntries(formData);
		console.log(
			'🚀 ~ file: Twitter.js ~ line 23 ~ getNextCollection ~ formProps',
			formProps
		);

		if (formProps.collection.startsWith('https://magiceden.io/marketplace/')) {
			setPopupState(false);
			console.log('getting next collection');
			console.log(formProps);
			const newCol = formProps.collection.split('/');

			const { data } = await axios.get(
				`http://localhost:8000/api/v1/collections/marketplaces/${
					newCol[newCol.length - 1]
				}`
			);
			setCollection(data);
		} else {
		}
	};

	const handleClick = (e) => {
		setActive(true);
	};

	const handlePopUpClick = (e) => {
		if (
			!e.target.closest('div').classList.contains('collection-input-popup') &&
			popupState
		) {
			e.preventDefault();
			setPopupState(false);
		}
	};
	return (
		<>
			<div id="products"></div>
			<div className="section-twitter" onClick={handlePopUpClick}>
				<h2 className="section-title">
					Simple setup, even easier customization
				</h2>
				<p className="section-description">
					On your dashboard you can update whatever, whenever. Your bots
					redeploy as soon as you save and your changes are live within seconds.
					It’s that easy!
				</p>
				<div className="background">
					<div className="grid-2">
						<div className="content">
							<h3>
								Write anything, watch your tweet dynamically update in realtime.
							</h3>
							<p>Use placeholders for the dynamicly generated data.</p>
							<div className={active ? 'text-area' : 'text-area blur'}>
								<div
									className={active ? 'blur-title hidden' : 'blur-title'}
									onClick={handleClick}
								>
									Try here
								</div>
								<textarea
									readOnly={windowSize < 577}
									className={active ? '' : 'blur'}
									name="twitter-content"
									value={tweetText}
									onChange={(e) => {
										setTweetText(e.target.value);
									}}
								/>
							</div>
							<span>
								If your collection is already in secondary marketplaces provide
								a link to your collection to use the demo with your real
								collection’s data.
							</span>
							<span className="only-desktop">
								Experiece the full demo on desktop.
							</span>
							<div
								className={` collection-input-popup ${
									popupState ? '' : 'hidden'
								}`}
							>
								<h4 className="holo-highlight">
									Input your collection's URL as seen bellow to load the last
									sale.
								</h4>
								<form
									name="load new collection"
									data-lpignore="true"
									onSubmit={getNextCollection}
								>
									<input
										type="text"
										autoComplete="new-password"
										name="collection"
										placeholder="https://magiceden.io/marketplace/degods"
									/>
									<button type="submit">Get my collection</button>
								</form>
							</div>
							<button
								onClick={() => {
									setPopupState(true);
								}}
							>
								Load my collection
							</button>
						</div>
						<div className="demo">
							<TweetDemo content={tweetText} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Twitter;
