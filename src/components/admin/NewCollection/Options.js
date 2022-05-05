import React from 'react';
import { Checkbox, Input, FormControlLabel } from '@mui/material';
import './styles.css';

const Options = () => {
	return (
		<>
			<div className="grid-2">
				<FormControlLabel
					control={<Input type="number" name="refreshPeriod" />}
					label="Refresh Period"
				/>
				<FormControlLabel
					control={<Input type="number" name="fetchQueryLimit" />}
					label="Fetch Query Limit"
				/>
			</div>
		</>
	);
};

export default Options;
