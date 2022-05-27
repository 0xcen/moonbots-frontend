import React from 'react';

// Components
import Hero from '../components/landingPage/Hero';
import Twitter from '../components/landingPage/Twitter';
import Customers from '../components/landingPage/Customers';
import Discord from '../components/landingPage/Discord';
import Socials from '../components/landingPage/Socials';
import WhoAreWe from '../components/landingPage/WhoAreWe';
import More from '../components/landingPage/More';
import Security from '../components/landingPage/Security';

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
