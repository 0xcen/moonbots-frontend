import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import isEmpty from '../helpers/isEmpty';
import AppThemeProvider from './AppThemeProvider';

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
				const {
					data: { solana: price },
				} = await axios.get(
					'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd',
					{
						withCredentials: false,
					}
				);
				setApp({ solana: price });
			})();
		}
	});

	return (
		<AppThemeProvider>
			<AppContext.Provider value={app}>
				<UpdateAppContext.Provider value={updateApp}>
					{children}
				</UpdateAppContext.Provider>
			</AppContext.Provider>
		</AppThemeProvider>
	);
};

export default AppProvider;
