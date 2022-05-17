import React from 'react';

const Security = () => {
	return (
		<section className="security" id="security">
			<h2 className="section-title">Security</h2>
			<div className="content">
				<p>
					If you've spent any extended period of time in the Solana NFT space,
					you've seen them happen. Security breaches, Data leaks, Bot Hacks,
					Fake mint links etc. As a service provider it's crucial for us to
					ensure the security of our customers information.
				</p>
				<br />
				{/* <p>
					Your private information is allways stored encrypted on our servers,
					and our systems require authorization keys at every stage which are
					constantly refreshed in order to access our private API.
				</p> */}
				<h3>Want more information?</h3>
				<p>
					Feel free to reach out{' '}
					<a href="/security" className="holo-link">
						here
					</a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
						<path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
					</svg>
				</p>
			</div>
		</section>
	);
};

export default Security;
