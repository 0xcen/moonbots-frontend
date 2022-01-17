import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';
import { Persist } from 'formik-persist';

import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik, Form } from 'formik';

const QuickTwitterOauth = () => {
	const [IsLoading, setIsLoading] = useState(false);
	const [searchParams] = useSearchParams();
	const screen_name = searchParams.get('screen_name') || '';
	const oauth_token = searchParams.get('oauth_token') || '';
	const oauth_token_secret = searchParams.get('oauth_token_secret') || '';
	const user_id = searchParams.get('user_id') || '';

	const handleClick = () => {
		setIsLoading(true);
		window.location.href =
			'https://callistobots.herokuapp.com/twitter/authorize';
	};

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
			) : IsLoading ? (
				<LoadingButton loading variant="contained" size="large">
					Authorize Twitter
				</LoadingButton>
			) : (
				<Button
					variant="contained"
					htref=""
					onClick={handleClick}
					// href="https://moonbots.herokuapp.com/twitter/authorize">
				>
					Authorize Twitter
				</Button>
			)}
		</div>
	);
};

export default QuickTwitterOauth;
