import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme, TextField, Button } from '@mui/material';

import Navbar from './components/Navbar';
import SignUpForm from './components/SignUpForm';
import Home from './components/Home';

const App = () => {
	const [newThemeColor, setNewThemeColor] = useState('#fff');
	const [activeColor, setActiveColor] = useState('#fff');
	const myTheme = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: activeColor,
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
					<TextField
						variant="outlined"
						value={newThemeColor}
						onChange={(val) => {
							setNewThemeColor(val.target.value);
						}}
					/>
					<Button
						onClick={() => {
							setActiveColor(newThemeColor);
						}}>
						Change Color
					</Button>

					{/* <h1>NFT Bots that really go BRR 🤑</h1> */}
					<h1>Marketing tools for NFTs</h1>
					<div className="flow-wrapper">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/signup" element={<SignUpForm />} />
							<Route
								path="/signup/success"
								element={<h2>Success!</h2>}
							/>
						</Routes>
					</div>
				</Router>
			</div>
		</ThemeProvider>
	);
};

export default App;
