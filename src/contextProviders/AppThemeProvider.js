import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

const AppThemeProvider = ({ children }) => {
	const myTheme = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: '#c9c9c9',
			},
		},
		typography: {
			// fontFamily: 'Roboto Mono',
			fontSize: 18,
		},
	});

	return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
