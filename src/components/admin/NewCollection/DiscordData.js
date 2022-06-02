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
					name="discordSalesWH"
					margin="normal"
					fullWidth
					label="Discord Sales Webhook"
				/>
				<TextField
					name="discordListingsWH"
					margin="normal"
					fullWidth
					label="Discord Listings Webhook"
				/>
				<TextField
					name="discordAuctionWH"
					margin="normal"
					fullWidth
					label="Discord Auction Webhook"
				/>
				<TextField
					name="discordStakingWH"
					margin="normal"
					fullWidth
					label="Discord Stakin Webhook"
				/>
			</div>
		</>
	);
};

export default DiscordData;
