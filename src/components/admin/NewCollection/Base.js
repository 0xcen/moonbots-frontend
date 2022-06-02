import React, { useContext } from 'react';
import { Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import {
	CollectionContext,
	UpdateCollectionContext,
} from '../../../contextProviders/CollectionProvider';

const Base = () => {
	const updateCollection = useContext(UpdateCollectionContext);
	const collection = useContext(CollectionContext);

	return (
		<div>
			<FormControlLabel
				control={<Checkbox name="userEnabled" />}
				label="Enabled"
			/>

			<TextField
				name="name"
				margin="normal"
				label="Collection Name"
				fullWidth
				onChange={(e) =>
					updateCollection({ ...collection, name: e.target.value })
				}
				autoComplete="new-password"
			/>
		</div>
	);
};

export default Base;
