import React, { useContext, useState } from 'react';
import { Button, TextField, Checkbox, FormControlLabel } from '@mui/material';

import Testing from './Testing';
import Options from './Options';
import TwitterData from './TwitterData';
import DiscordData from './DiscordData';
import Products from './Products';
import Base from './Base';
import CollectionData from './CollectionData';
import axios from 'axios';
import UserProvider, { UpdateUserContext } from './UserProvider';

const AddUser = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const updateUserContext = useContext(UpdateUserContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		axios
			.post('http://localhost:8000/api/v1/users', formData)
			.then(console.log)
			.catch(console.log);
	};

	return (
		<form
			encType="multipart/form-data"
			autoComplete="off"
			name="new-user"
			onSubmit={handleSubmit}
			noValidate
		>
			<UserProvider>
				<h1>New User</h1>
				<Base />
				<h2>Options</h2>
				<Options />
				<h3>Testing</h3>
				<Testing />
				<h2>Collection Data</h2>
				<CollectionData />
				<h2>Twitter Data</h2>
				<TwitterData />
				<h2>Discord Data</h2>
				<DiscordData />
				<h2>Products</h2>
				<Products />
				<Button type="submit">submit</Button>
			</UserProvider>
		</form>
	);
};

export { AddUser };
