import React from 'react';
import { Checkbox, Input, FormControlLabel } from '@mui/material';
import './styles.css';

const Testing = () => {
	return (
		<>
			<div className="grid-2">
				<FormControlLabel
					control={<Checkbox name="testingSales" />}
					label="Sales"
				/>
				<FormControlLabel
					control={<Checkbox name="testingListings" />}
					label="Listings"
				/>
				<FormControlLabel
					control={<Input type="number" name="testingAmount" />}
					label="Amount"
				/>
				<FormControlLabel
					control={<Checkbox name="testingMoonbotsServer" />}
					label="Post to Moonbots Server?"
				/>
			</div>
		</>
	);
};

export default Testing;
