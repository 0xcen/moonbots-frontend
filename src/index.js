import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProvider from './contextProviders/UserProvider';
import AppThemeProvider from './contextProviders/AppThemeProvider';

ReactDOM.render(
	<React.StrictMode>
		<AppThemeProvider>
			<UserProvider>
				<App />
			</UserProvider>
		</AppThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
