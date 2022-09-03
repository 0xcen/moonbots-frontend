import React, { useState } from 'react';
import { ButtonWithLoading } from './form/ButtonWithLoading';
import config from '../config';
import { useEffect } from 'react';

const TwitterOauth = (props) => {
	const [screenName, setScreenName] = useState('');

	useEffect(() => {
		const search = window.location.search;
		const params = new URLSearchParams(search);
		const nextScreenName = params.get('screen_name');
		if (nextScreenName) setScreenName(nextScreenName);
	}, []);
	return (
		<section className="full-page">
			<div className="rounded-gradient-bg">
				<div className="input-container">
					<h2 className="input-label">Link your bot's twitter account</h2>
					{screenName ? (
						<div>
							<p>
								<span className="holo-link">@{screenName}&nbsp;</span>{' '}
								Successfully Linked
							</p>
							<br />
							<p>You may now close this window</p>
						</div>
					) : (
						<ButtonWithLoading
							className="btn-cta"
							variant="contained"
							href={`${
								config[process.env.NODE_ENV].MOONBOTS_API
							}/twitter/authorize`}
							text="Authorize Twitter"
						/>
					)}
				</div>
			</div>
		</section>
	);
};

export default TwitterOauth;
