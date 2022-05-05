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
import { CollectionContext } from '../../../contextProviders/CollectionProvider';

const NewCollection = () => {
	const collection = useContext(CollectionContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const tweets = [];

		const formData = new FormData(e.currentTarget);
		if (collection?.embedColor?.hex) {
			formData.set('embedColor', collection.embedColor.hex.replace('#', '0x'));
		}
		if (formData.get('tweet')) tweets.push();
		if (formData.get('summaryTweet'))
			tweets.push({ content: formData.get('summaryTweet'), tag: 'summary' });

		console.log([...formData.entries()]);

		axios
			.post('http://localhost:8000/api/v1/collections', formData)
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
			<h1>New Collection</h1>
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
		</form>
	);
};

export default NewCollection;
