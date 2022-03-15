import React from 'react';
import { Checkbox, Input, FormControlLabel } from '@mui/material';
import './styles.css';

const Testing = () => {
	return (
		<>
			<div className="grid-2">
				<FormControlLabel
					control={<Checkbox name="testing_sales" />}
					label="Sales"
				/>
				<FormControlLabel
					control={<Checkbox name="testing_listings" />}
					label="Listings"
				/>
				<FormControlLabel
					control={<Input type="number" name="testing_amount" />}
					label="Amount"
				/>
				<FormControlLabel
					control={<Checkbox name="testing_moonbots_server" />}
					label="Post to Moonbots Server?"
				/>
			</div>
		</>
	);
};

export default Testing;
