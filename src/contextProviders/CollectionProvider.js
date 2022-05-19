import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import isEmpty from '../helpers/isEmpty';

export const UpdateCollectionContext = createContext();
export const CollectionContext = createContext();

const defaultCollection = {
	_id: '6283c9555f48ecb25ff190e0',
	transaction_id:
		'2cBkj4kuaK6LSe79C8eT6q9SGwMMQHggKsPh86dgaQAyNcRiJao6oGfZRRQcLCwUGt59j7mSJ2Tvmv2PhHE5Ygdh',
	txType: 'exchange',
	blockTime: 1652803919,
	buyer_address: '84YnzvszEh58Z6P4VFYKhkCCgitca9eoBr9WpkzAEB85',
	collection_symbol: 'okay_bears',
	createdAt: '2022-05-17T16:12:05.778Z',
	mint: '7oEYB1At5bnAsSgkuDdaQnuFfDo2yGcpaKnpzmNiPhnc',
	notifiable: true,
	onChainCollectionAddress: null,
	parsedTransaction: {
		txType: 'exchange',
		transaction_id:
			'2cBkj4kuaK6LSe79C8eT6q9SGwMMQHggKsPh86dgaQAyNcRiJao6oGfZRRQcLCwUGt59j7mSJ2Tvmv2PhHE5Ygdh',
		blockTime: 1652803919,
		slot: 134165345,
		collection_symbol: 'okay_bears',
		mint: '7oEYB1At5bnAsSgkuDdaQnuFfDo2yGcpaKnpzmNiPhnc',
		total_amount: 230000000000,
		platform_fees_amount: 0,
		seller_fee_amount: 0,
		creator_fees_amount: 0,
		seller_address: 'A6xJqiXcFRP5ck9W8VASaoU8YkQemaoKeScSe76YW5va',
		buyer_address: '84YnzvszEh58Z6P4VFYKhkCCgitca9eoBr9WpkzAEB85',
	},
	seller_address: 'A6xJqiXcFRP5ck9W8VASaoU8YkQemaoKeScSe76YW5va',
	slot: 134165345,
	source: 'magiceden_v2',
	step: 1,
	totalSteps: 2,
	txName: 'buy_now',
	mintObject: {
		mintAddress: '7oEYB1At5bnAsSgkuDdaQnuFfDo2yGcpaKnpzmNiPhnc',
		img: 'https://bafybeida6ibn5gda4v4ramj7aeksdcoghblggyasp473nzgdow64a2mtoi.ipfs.nftstorage.link/2647.png?ext=png',
		supply: 1,
		title: 'Okay Bear #2648',
		content:
			'Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.',
		attributes: [
			{
				trait_type: 'Background',
				value: 'White',
			},
			{
				trait_type: 'Fur',
				value: 'Tan',
			},
			{
				trait_type: 'Mouth',
				value: 'Okay',
			},
			{
				trait_type: 'Eyes',
				value: 'Annoyed',
			},
			{
				trait_type: 'Clothes',
				value: 'Vintage Windbreaker',
			},
		],
		updateAuthority: '7ttWYWpc9H9NUQnEaH64qWLwXcHMYwFBu1WrtwjyAHC3',
		primarySaleHappened: true,
		sellerFeeBasisPoints: 750,
		creators: [
			{
				address: '3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9',
				verified: 1,
				share: 0,
			},
			{
				address: '7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe',
				verified: 0,
				share: 100,
			},
		],
		propertyCategory: 'image',
		externalUrl: 'https://www.okaybears.com/',
		properties: {
			files: [
				{
					uri: 'https://bafybeida6ibn5gda4v4ramj7aeksdcoghblggyasp473nzgdow64a2mtoi.ipfs.nftstorage.link/2647.png?ext=png',
					type: 'image/png',
				},
			],
			category: 'image',
			creators: [
				{
					address: '7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe',
					share: 100,
				},
			],
		},
		onChainName: 'Okay Bear #2648',
	},
};

const CollectionProvider = ({ children }) => {
	const [collection, setCollection] = useState(defaultCollection);

	useEffect(() => {
		(async () => {
			// console.log('here');
			const { data } = await axios.get(
				`https://moonbots-dev.herokuapp.com/api/v1/collections/marketplaces/okay_bears`,
				{
					validateStatus: false,
					headers: {
						'Access-Control-Allow-Origin': window.location.origin,
					},
				}
			);
			if (!data) return updateCollection(defaultCollection);

			updateCollection(data);
		})();
	}, []);

	const updateCollection = (next) => {
		setCollection({
			name: next.mintObject.title,
			embedColor: '#fff',
			signature:
				'65npuq7VvwtN2UoeTcZvnV5qFUr1XDjkVNxsa46MrGPWkGCdovgtPs3mbpPV8ZH5A4WJTYT6V586PVAhNBpLcxUc',
			tokenMint: 'BS6fPnS9JRsvBPiHCAuTK9tcSWR1R1WRoZm1YYnY7MPp',
			collection: next.collection_symbol,
			buyer: '3CWSZPj5HwHFsuST2XCKtwp6ar56yqRCuTmKnJsFqXsn',
			buyerReferral: '',
			seller: 'JDQRQR5QjkmYMUevv7qxduRdrGTRDwVWjm8i937GUwWe',
			sellerReferral: '',
			img: next.mintObject.img,
			media: next.mintObject.img,
			price: next.parsedTransaction.total_amount / 1000000000,
		});
	};

	// todo: get marketplace data

	return (
		<CollectionContext.Provider value={collection}>
			<UpdateCollectionContext.Provider value={updateCollection}>
				{children}
			</UpdateCollectionContext.Provider>
		</CollectionContext.Provider>
	);
};

export default CollectionProvider;
