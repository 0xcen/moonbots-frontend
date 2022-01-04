import React from 'react';
import { Box, Button, TextField } from '@mui/material';

const EmailWidget = () => {
	return (
		<div>
			<Box>
				<TextField />
				<Button variant="outlined" size="large">
					Submit
				</Button>
			</Box>
		</div>
	);
};

export default EmailWidget;
