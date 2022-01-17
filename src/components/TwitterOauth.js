import React from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { LoadingButton } from '@mui/lab';
import ButtonWithLoading from './form/ButtonWithLoading';

const TwitterOauth = ({ screen_name, ...props }) => {
	return (
		<>
			<div>
				<label className="input-label">
					Link your bot's twitter account
				</label>
				{screen_name ? (
					<p className="link">
						{`@${screen_name} Successfully Linked`}
					</p>
				) : (
					<ButtonWithLoading
						variant="contained"
						href="https://moonbots.herokuapp.com/twitter/authorize"
						text="Authorize Twitter"
					/>
				)}
			</div>
		</>
	);
};

export default TwitterOauth;
