import React from 'react';
import './css/App.css';
import './css/queries.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

import Navbar from './components/Navbar';
import { SignUpForm } from './components/SignUpForm';
import Home from './components/Home';
import Success from './components/Success';
import Fail from './components/Fail';
import MarketingTool from './components/MarketingTool';
import QuickTwitterOauth from './components/QuickTwitterOauth';
import { AddUser } from './components/internal/newUser';

const App = () => {
	// const [newThemeColor, setNewThemeColor] = useState('#fff');
	// const [activeColor, setActiveColor] = useState('#fff');
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

	return (
		<ThemeProvider theme={myTheme}>
			<div className="app">
				<div className="moon"></div>
				<Router>
					<Navbar />
					<h1 className="h1">
						NFT Bots that really go BRR{' '}
						<span role="img" aria-label="money face">
							🤑
						</span>
					</h1>
					{/* {/* <h1>Marketing tools for NFTs< */}
					<div className="flow-wrapper-wrapper">
						<div className="flow-wrapper">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/signup" element={<SignUpForm />} />
								<Route path="/signup/success" element={<Success />} />
								<Route path="/signup/fail" element={<Fail />} />
								<Route path="/twitter-auth" element={<QuickTwitterOauth />} />
								<Route path="/moonbase/demo" element={<MarketingTool />} />
								<Route path="/user/new" element={<AddUser />} />
							</Routes>
						</div>
					</div>
				</Router>
				<footer>
					{<span>&#169; {new Date().getFullYear()} MoonBots</span>}
				</footer>
			</div>
		</ThemeProvider>
	);
};

export default App;
