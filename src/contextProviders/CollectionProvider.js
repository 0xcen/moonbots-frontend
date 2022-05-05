import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const UpdateCollectionContext = createContext();
export const CollectionContext = createContext();

const CollectionProvider = ({ children }) => {
	const [collection, setCollection] = useState({
		name: 'Ubik',
		embedColor: '#fff',
		signature:
			'65npuq7VvwtN2UoeTcZvnV5qFUr1XDjkVNxsa46MrGPWkGCdovgtPs3mbpPV8ZH5A4WJTYT6V586PVAhNBpLcxUc',
		tokenMint: 'BS6fPnS9JRsvBPiHCAuTK9tcSWR1R1WRoZm1YYnY7MPp',
		collection: 'ubik',
		buyer: '3CWSZPj5HwHFsuST2XCKtwp6ar56yqRCuTmKnJsFqXsn',
		buyerReferral: '',
		seller: 'JDQRQR5QjkmYMUevv7qxduRdrGTRDwVWjm8i937GUwWe',
		sellerReferral: '',
		img: 'https://dweb.link/ipfs/bafybeic3fifsjhx574eqik6e3gobaanz3ofsmeeyet3qfd65uh2yvvi4ti/180.png',
		price: 9.39,
	});
	const updateCollection = (next) => {
		setCollection({ ...collection, ...next });
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
