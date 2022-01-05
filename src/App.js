import React from 'react';
import './App.css';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme, TextField, Button } from '@mui/material';

import Navbar from './components/Navbar';
import { NewUserForm } from './components/NewUserForm';
import Home from './components/Home';
import Success from './components/Success';

const App = () => {
	const [newThemeColor, setNewThemeColor] = useState('#fff');
	const [activeColor, setActiveColor] = useState('#fff');
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
				<Router>
					<Navbar />
					<h1 className="h1">NFT Bots that really go BRR 🤑</h1>
					{/* {/* <h1>Marketing tools for NFTs< */}
					<div className="flow-wrapper-wrapper">
						<div className="flow-wrapper">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route
									path="/signup"
									element={<NewUserForm />}
								/>
								<Route
									path="/signup/success"
									element={<Success />}
								/>
							</Routes>
						</div>
					</div>
				</Router>
			</div>
		</ThemeProvider>
	);
};

export default App;
