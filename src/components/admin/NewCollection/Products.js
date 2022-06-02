import React from 'react';
import {
	Checkbox,
	Input,
	FormControlLabel,
	TextField,
	TextareaAutosize,
} from '@mui/material';
import './styles.css';

const Products = () => {
	return (
		<>
			<div className="grid">
				<div>
					<h3>Sales</h3>
					<FormControlLabel
						control={<Checkbox name="productSalesEnabled" />}
						label="Enabled"
					/>
					<h4>Bots</h4>
					<div className="grid-2">
						<FormControlLabel
							control={<Checkbox name="productSalesBotsDiscord" />}
							label="Discord Sales Bot"
						/>
						<FormControlLabel
							control={<Checkbox name="productSalesBotsTwitter" />}
							label="Twitter Sales Bot"
						/>
					</div>
				</div>
				<div>
					<h3>Listings</h3>
					<FormControlLabel
						control={<Checkbox name="productListingsEnabled" />}
						label="Enabled"
					/>
				</div>
				<div>
					<h3>Auction</h3>
					<FormControlLabel
						control={<Checkbox name="productAuctionEnabled" />}
						label="Enabled"
					/>
					<TextField
						name="productAuctionMagicEdenAuctionURL"
						margin="normal"
						fullWidth
						label="Magic Eden Auction Url"
					/>
					<TextField
						name="productAuctionHolaplaxAuctionContract"
						margin="normal"
						fullWidth
						label="Holaplex Auction Contract"
					/>
				</div>
				<div>
					<h3>Staking</h3>
					<FormControlLabel
						control={<Checkbox name="productStakingEnabled" />}
						label="Enabled"
					/>
					<TextField
						name="productStakingContract"
						margin="normal"
						fullWidth
						label="Staking Contract"
					/>
				</div>
			</div>
		</>
	);
};

export default Products;
