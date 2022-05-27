import React, { createContext, useEffect, useState } from 'react';
import AppThemeProvider from './AppThemeProvider';
import getPrice from '../api/coinGecko';

export const UpdateAppContext = createContext();
export const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [app, setApp] = useState({});
	const updateApp = (next) => {
		setApp({ ...app, ...next });
	};

	useEffect(() => {
		(async () => {
			if (!app.solana) {
				const price = await getPrice();
				setApp({ solana: price });
			}
		})();
	}, [app]);

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
