import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import isEmpty from '../helpers/isEmpty';

export const UpdateAppContext = createContext();
export const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [app, setApp] = useState({ solana: null });
	const updateApp = (next) => {
		setApp({ ...app, ...next });
	};

	useEffect(() => {
		if (!app.solana) {
			(async () => {
				const price = await axios.get(
					'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true%27'
				);
				console.log(price);
			})();
		}
	});

	return (
		<AppContext.Provider value={app}>
			<UpdateAppContext.Provider value={updateApp}>
				{children}
			</UpdateAppContext.Provider>
		</AppContext.Provider>
	);
};

export default AppProvider;
