import React from 'react';

// Components
import Hero from './Hero';
import Twitter from './Twitter';
import Customers from './Customers';
import Discord from './Discord';
import Socials from './Socials';
import WhoAreWe from './WhoAreWe';
import More from './More';
import Security from './Security';

const LandingPage = () => {
	return (
		<>
			<div className="app-wrapper">
				<Hero />
			</div>
			<Customers />

			<div className="app-wrapper">
				<Twitter />
				<Discord />
				<WhoAreWe />
				<Socials />
				<More />
				<Security />
			</div>
		</>
	);
};

export default LandingPage;
