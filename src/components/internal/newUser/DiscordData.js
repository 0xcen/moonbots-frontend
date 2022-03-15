import React from 'react';
import {
	Checkbox,
	Input,
	FormControlLabel,
	TextField,
	TextareaAutosize,
} from '@mui/material';
import './styles.css';

const DiscordData = () => {
	return (
		<>
			<div className="">
				<TextField
					name="discord_sales_wh"
					margin="normal"
					fullWidth
					label="Discord Sales Webhook"
				/>
				<TextField
					name="discord_listings_wh"
					margin="normal"
					fullWidth
					label="Discord Listings Webhook"
				/>
				<TextField
					name="discord_auction_wh"
					margin="normal"
					fullWidth
					label="Discord Auction Webhook"
				/>
				<TextField
					name="discord_staking_wh"
					margin="normal"
					fullWidth
					label="Discord Stakin Webhook"
				/>
			</div>
		</>
	);
};

export default DiscordData;
