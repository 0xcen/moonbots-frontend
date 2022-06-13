import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import sale from '../dummy/sale';

export const UpdateCollectionContext = createContext();
export const CollectionContext = createContext();

const CollectionProvider = ({ children }) => {
	const [collection, setCollection] = useState(sale);

	// Get data from marketplace
	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				`https://moonbots-dev.herokuapp.com/api/v1/collections/marketplaces/okay_bears`,
				{
					validateStatus: false,
					headers: {
						'Access-Control-Allow-Origin': window.location.origin,
					},
				}
			);
			if (data.status === 'error') return updateCollection(sale);
			const [latestSale, ..._] = data?.filter((t) => t.type === 'buyNow');
			if (!latestSale) return updateCollection(sale);

			updateCollection(latestSale);
		})();
	}, []);

	// parse new collection
	const updateCollection = (next) => {
		setCollection({
			name: next.mintObject.title,
			tokenMint: next.mint,
			transaction_id: next.transaction_id,
			collection: next.collection_symbol,
			img: next.mintObject.img,
			media: next.mintObject.img,
			price: next.parsedTransaction.total_amount / 1000000000,
		});
	};

	return (
		<CollectionContext.Provider value={collection}>
			<UpdateCollectionContext.Provider value={updateCollection}>
				{children}
			</UpdateCollectionContext.Provider>
		</CollectionContext.Provider>
	);
};

export default CollectionProvider;
