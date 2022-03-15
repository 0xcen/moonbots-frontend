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
						control={<Checkbox name="product_sales_enabled" />}
						label="Enabled"
					/>
					<h4>Bots</h4>
					<div className="grid-2">
						<FormControlLabel
							control={<Checkbox name="product_sales_bots_discord" />}
							label="Discord Sales Bot"
						/>
						<FormControlLabel
							control={<Checkbox name="product_sales_bots_twitter" />}
							label="Twitter Sales Bot"
						/>
					</div>
				</div>
				<div>
					<h3>Listings</h3>
					<FormControlLabel
						control={<Checkbox name="product_listings_enabled" />}
						label="Enabled"
					/>
				</div>
				<div>
					<h3>Auction</h3>
					<FormControlLabel
						control={<Checkbox name="product_auction_enabled" />}
						label="Enabled"
					/>
					<TextField
						name="product_auction_magic_eden_auction_url"
						margin="normal"
						fullWidth
						label="Magic Eden Auction Url"
					/>
					<TextField
						name="product_auction_holaplex_auction_contract"
						margin="normal"
						fullWidth
						label="Holaplex Auction Contract"
					/>
				</div>
				<div>
					<h3>Staking</h3>
					<FormControlLabel
						control={<Checkbox name="product_staking_enabled" />}
						label="Enabled"
					/>
					<TextField
						name="product_staking_contract"
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
