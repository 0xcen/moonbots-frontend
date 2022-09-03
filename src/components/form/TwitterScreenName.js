import React from 'react';
import { ButtonWithLoading } from './ButtonWithLoading';
import config from '../../../config';

const TwitterScreenName = ({ screen_name }) => {
	return screen_name ? (
		<p className="link" style={{ marginBottom: '2rem' }}>
			@{screen_name} Successfully Linked
		</p>
	) : (
		<ButtonWithLoading
			text="Authorize Twitter"
			variant="contained"
			href={`${config[process.env.NODE_ENV].MOONBOTS_API}/twitter/authorize`}
		/>
	);
};

export default TwitterScreenName;
