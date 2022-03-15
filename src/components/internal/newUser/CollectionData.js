import React, { useState, useContext } from 'react';
import { Checkbox, Input, FormControlLabel, TextField } from '@mui/material';
import './styles.css';
import { UpdateUserContext } from './UserProvider';
import { UserContext } from './UserProvider';

const CollectionData = () => {
	const updateContext = useContext(UpdateUserContext);
	const userContext = useContext(UserContext);

	return (
		<>
			<div className="grid">
				<div>
					<TextField
						name="plural_of_nft"
						margin="normal"
						onChange={(e) => updateContext({ plural_of_nft: e.target.value })}
						fullWidth
						label="Plural of Nft"
					/>
					<TextField
						name="royalty_wallet"
						margin="normal"
						label="Royalty Wallet"
						fullWidth
					/>
				</div>
				<h3>Media</h3>

				<Input
					type="file"
					name="collection_gif"
					onChange={(e) => updateContext({ media: e.target.files[0] })}
				/>
				<h3>Marketplaces</h3>

				<div>
					<TextField
						name="solanart_url"
						margin="normal"
						fullWidth
						label="Solanart URL"
					/>
					<TextField
						name="magic_eden_url"
						margin="normal"
						fullWidth
						label="Magic Eden URL"
					/>
					<TextField
						name="alpha_art_url"
						margin="normal"
						fullWidth
						label="Alpha Art URL"
					/>
				</div>
				<h3>Ranking</h3>

				<div>
					<TextField
						name="howrareis_url"
						margin="normal"
						fullWidth
						label="HowRare URL"
					/>
					<TextField
						name="moonrank_url"
						margin="normal"
						fullWidth
						label="Moonrank URL"
					/>
				</div>
			</div>
		</>
	);
};

export default CollectionData;
