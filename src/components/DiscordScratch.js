import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DiscordSalesMockup from './DiscordSalesMockup';

const DiscordScratch = () => {
	const [sale, setSale] = useState(null);
	const getSale = async (collection) => {
		const {
			data: { results },
		} = await axios.get(
			`https://api-mainnet.magiceden.io/rpc/getGlobalActivitiesByQuery?q={"$match":{"collection_symbol":"${collection}", "txType": "exchange"},"$sort":{"blockTime":-1,"createdAt":-1},"$skip":0, "$limit":5}`
		);
		const collectionInfo =
			await axios.get(`https://api-mainnet.magiceden.dev/v2/collections/${collection}/stats
        `);

		const res = { ...results[0], ...collectionInfo.data };
		return setSale(res);
	};

	useEffect(() => {
		getSale('taiyo_robotics');
	}, []);

	return <>{sale && <DiscordSalesMockup props={sale} />}</>;
};

export default DiscordScratch;
