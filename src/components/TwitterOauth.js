import React from 'react';
import { Button } from '@mui/material';

const TwitterOauth = ({ screen_name, values }) => {
	return (
		<div>
			<label className="input-label">
				Link the twitter account of your bot.
			</label>
			{screen_name ? (
				<p style={{ color: 'green', textDecoration: 'underline' }}>
					{`@${screen_name} Successfully Linked`}
				</p>
			) : (
				<Button
					variant="contained"
					href="http://localhost:8000/twitter/authorize">
					Authorize Twitter
				</Button>
			)}
		</div>
	);
};

export default TwitterOauth;
