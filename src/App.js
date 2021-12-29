import './App.css';
import Navbar from './components/Navbar';
import OnboardFlow from './components/OnboardFlow';
import { ThemeProvider, createTheme } from '@mui/material';

const myTheme = createTheme({
	palette: {
		mode: 'dark',
		dark: { primary: '#f02934', divider: '#f02934' },
	},
	typography: {
		fontFamily: 'Roboto Mono',
		fontSize: 18,
	},
});

const App = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<div className="app">
				<Navbar />
				<h1>NFT bots that really go BRR 🤑</h1>
				<OnboardFlow />
			</div>
		</ThemeProvider>
	);
};

export default App;
