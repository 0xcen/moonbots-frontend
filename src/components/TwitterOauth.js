import React from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';

const TwitterOauth = ({ screen_name, ...props }) => {
	return (
		<>
			<div>
				<label className="input-label">
					Link your bot's twitter account
				</label>
				{screen_name ? (
					<p
						style={{
							color: 'green',
							textDecoration: 'underline',
						}}>
						{`@${screen_name} Successfully Linked`}
					</p>
				) : (
					<Button
						variant="contained"
						href="https://moonbots.herokuapp.com/twitter/authorize">
						Authorize Twitter
					</Button>
				)}
			</div>
		</>
	);
};

export default TwitterOauth;
