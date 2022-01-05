import React from 'react';
import { Button, TextField } from '@mui/material';
import EmailWidget from './EmailWidget';

const Home = () => {
	return (
		<div className="container centered">
			<h2 className="h2-loud">🚀 Preparing for Liftoff!</h2>
			<p>
				MoonBots is getting ready to go online for everyone... In the
				meantime we're onboarding a few projects manually, so if you'd
				like to get onboarded ASAP shoot us an{' '}
				<a href="mailto:wenmoonbots@gmail.com" className="link">
					email
				</a>{' '}
				or reach out to us on our discord.
			</p>
			<div>
				<Button
					variant="outlined"
					size="large"
					fullWidth={false}
					href="https://discord.gg/ZTsPTbb7Bx">
					Join MoonBot's Server
				</Button>
			</div>
		</div>
	);
};

export default Home;
