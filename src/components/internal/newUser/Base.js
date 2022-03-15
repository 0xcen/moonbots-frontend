import React, { useContext } from 'react';
import { Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { UpdateUserContext } from './UserProvider';

const Base = () => {
	const updateContext = useContext(UpdateUserContext);
	return (
		<div>
			<FormControlLabel
				control={<Checkbox name="user_enabled" />}
				label="Enabled"
			/>

			<TextField
				name="name"
				margin="normal"
				label="Collection Name"
				fullWidth
				autoComplete="new-password"
				onChange={(e) => updateContext({ name: e.target.value })}
			/>
		</div>
	);
};

export default Base;
