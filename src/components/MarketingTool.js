import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

import DiscordSalesMockup from './DiscordSalesMockup';
import TwitterSalesMockup from './TwitterDemo/TwitterSalesMockup';

const MarketingTool = () => {
	const [userInput, setUserInput] = useState('');
	const [collection, setCollection] = useState('');
	const [sale, setSale] = useState(null);

	const getSale = async () => {
		if (!collection) return;
		const {
			data: { results },
		} = await axios.get(
			`https://api-mainnet.magiceden.io/rpc/getGlobalActivitiesByQuery?q={"$match":{"collection_symbol":"${collection}", "txType": "exchange"},"$sort":{"blockTime":-1,"createdAt":-1},"$skip":0, "$limit":5}`
		);
		const collectionInfo = await axios.get(
			`https://api-mainnet.magiceden.dev/v2/collections/${collection}/stats`
		);
		const collectionImg = await axios.get(
			`https://api-mainnet.magiceden.io/collections/${collection}`
		);
		const sol = await axios.get(
			'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd'
		);

		const res = {
			...results[0],
			...sol.data.solana,
			...collectionInfo.data,
			...collectionImg.data,
		};
		return setSale(res);
	};
	useEffect(() => {
		getSale();
	}, [collection]);

	return (
		<>
			<TextField
				type='text'
				onChange={(e) => setUserInput(e.target.value)}
				value={userInput}
			/>
			<Button
				size='large'
				onClick={() =>
					setCollection(userInput.toLowerCase().split(' ').join('_'))
				}>
				Search
			</Button>
			<div style={{ display: 'flex' }}>
				<DiscordSalesMockup props={sale} />
				<TwitterSalesMockup props={sale} />
			</div>
		</>
	);
};

export default MarketingTool;
