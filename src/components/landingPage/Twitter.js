import React, { useState, useContext } from 'react';
import axios from 'axios';
import TweetDemo from '../TwitterDemo/TweetDemo';
import { UpdateCollectionContext } from '../../contextProviders/CollectionProvider';

const Twitter = () => {
	const [tweetText, setTweetText] = useState(
		'💫 {{NFT}} \n\n💰 SOLD for {{PRICE}} \n\n🚀 #LFG \n\n🪐 {{TXURL}} \n\n 🛒 {{MARKETPLACE}}'
	);
	const [active, setActive] = useState(false);
	const windowSize = window.screen.width;
	const setCollection = useContext(UpdateCollectionContext);

	const getCollection = async () => {
		// await
		const {
			data: {
				results: [sale, ...rest],
			},
		} = await axios.get(
			`https://api-mainnet.magiceden.io/rpc/getGlobalActivitiesByQuery?q={"$match":{"collection_symbol":"degods", "txType": "exchange"},"$sort":{"blockTime":-1,"createdAt":-1},"$skip":0, "$limit":5}`
		);

		console.log(sale);
		setCollection(sale);
	};

	const handleClick = (e) => {
		setActive(true);
	};
	return (
		<>
			<div id="products"></div>
			<div className="section-twitter">
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
							<button onClick={getCollection}>Load my collection</button>
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
