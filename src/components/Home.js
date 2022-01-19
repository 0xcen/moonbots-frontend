import React from 'react';

const Home = () => {
	return (
		<div className="container centered">
			<h2 className="h2-loud">
				<span role="img" aria-label="rocket">
					🚀
				</span>{' '}
				Preparing for Liftoff!
			</h2>
			<p>
				MoonBots is getting ready to go online for everyone... In the
				meantime, we're onboarding a projects manually, so if you'd like
				to get onboarded ASAP shoot us an{' '}
				<a href="mailto:wenmoonbots@gmail.com" className="link">
					email
				</a>{' '}
				or reach out to us on{' '}
				<a href="https://twitter.com/wenmoonbots" className="link">
					twitter
				</a>
				!
			</p>
		</div>
	);
};

export default Home;
