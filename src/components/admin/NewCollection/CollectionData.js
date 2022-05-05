import React, { useState, useContext } from 'react';
import { Input, Button, TextField } from '@mui/material';
import { ChromePicker } from 'react-color';
import './styles.css';
import {
	CollectionContext,
	UpdateCollectionContext,
} from '../../../contextProviders/CollectionProvider';

const CollectionData = () => {
	const [showColorPicker, setShowColorPicker] = useState(false);
	const updateCollection = useContext(UpdateCollectionContext);
	const collection = useContext(CollectionContext);

	return (
		<>
			<div className="grid">
				<div>
					<TextField
						name="pluralOfNft"
						margin="normal"
						onChange={(e) => updateCollection({ pluralOfNft: e.target.value })}
						fullWidth
						label="Plural of Nft"
					/>
					<TextField
						name="royaltyWallet"
						margin="normal"
						label="Royalty Wallet"
						fullWidth
					/>
					<h4 style={{ marginTop: '2rem' }}>Embed Color</h4>
					<Button
						style={{ margin: '2rem auto' }}
						size="large"
						variant="outlined"
						onClick={() => setShowColorPicker(!showColorPicker)}
						padding="normal"
					>
						Pick a Color
					</Button>
					{showColorPicker && (
						<ChromePicker
							color={collection.embedColor}
							name="embedColor"
							onChange={(color, e) => updateCollection({ embedColor: color })}
						/>
					)}
				</div>
				<h3>Media</h3>

				<Input
					type="file"
					name="collectionMedia"
					onChange={(e) => updateCollection({ media: e.target.files[0] })}
				/>
				<h3>Marketplaces</h3>

				<div>
					<TextField
						name="solanartURL"
						margin="normal"
						fullWidth
						label="Solanart URL"
					/>
					<TextField
						name="magicEdenURL"
						margin="normal"
						fullWidth
						label="Magic Eden URL"
					/>
					<TextField
						name="alphaArtURL"
						margin="normal"
						fullWidth
						label="Alpha Art URL"
					/>
				</div>
				<h3>Ranking</h3>

				<div>
					<TextField
						name="howrareURL"
						margin="normal"
						fullWidth
						label="HowRare URL"
					/>
					<TextField
						name="moonrankURL"
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
