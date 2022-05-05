import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

const AppThemeProvider = ({ children }) => {
	const myTheme = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: '#5aff47',
			},
		},
		typography: {
			fontFamily: 'Roboto Mono',
			fontSize: 18,
		},
	});

	return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
