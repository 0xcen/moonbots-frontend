import React from 'react';
import { Checkbox, Input, FormControlLabel } from '@mui/material';
import './styles.css';

const Options = () => {
	return (
		<>
			<div className="grid-2">
				<FormControlLabel
					control={<Input type="number" name="refresh_period" />}
					label="Refresh Period"
				/>
				<FormControlLabel
					control={<Input type="number" name="fetch_query_limit"/>}
					label="Fetch Query Limit"
				/>
			</div>
		</>
	);
};

export default Options;
