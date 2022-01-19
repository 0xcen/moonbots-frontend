import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ButtonWithLoading } from './form/ButtonWithLoading';

const QuickTwitterOauth = () => {
	const [searchParams] = useSearchParams();
	const screen_name = searchParams.get('screen_name') || '';
	// const oauth_token = searchParams.get('oauth_token') || '';
	// const oauth_token_secret = searchParams.get('oauth_token_secret') || '';
	// const user_id = searchParams.get('user_id') || '';

	return (
		<div style={{ textAlign: 'center' }}>
			<label className="input-label" style={{ marginBottom: '3rem' }}>
				{screen_name
					? 'Thank you! You may close this window now.'
					: "Please link your Bot's Twitter Account again."}
			</label>
			{screen_name ? (
				<p className="link" style={{ marginBottom: '2rem' }}>
					@{screen_name} Successfully Linked
				</p>
			) : (
				<ButtonWithLoading
					variant="contained"
					size="large"
					href="https://callistobots.herokuapp.com/twitter/authorize"
					text="Link Twitter"
				/>
			)}
		</div>
	);
};

export default QuickTwitterOauth;
