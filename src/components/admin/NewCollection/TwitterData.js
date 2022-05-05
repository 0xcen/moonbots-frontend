import React, { useContext, useState } from 'react';
import {
	Checkbox,
	Input,
	FormControlLabel,
	TextField,
	TextareaAutosize,
} from '@mui/material';
import TweetDemo from '../../TwitterDemo/TweetDemo';
import './styles.css';

const TwitterData = () => {
	const [tweet, setTweet] = useState(
		'💫 {{NFT}} \n\n💰 SOLD for {{PRICE}} \n\n🚀 #LFG \n\n🪐 {{TXURL}} \n\n'
	);
	const [summaryTweet, setSummaryTweet] = useState(
		'👀 Sales Bot Go BRRR! 👀 \n\n🚨 {{NUM}} {{PLURAL}} have SOLD in the last 60s🚨\n\n🐦 {{TWITTER}} #LFG \n\n'
	);

	const [twitterHandle, setTwitterHandle] = useState('@');
	const [twitterApiData, setTwitterApiData] = useState({
		user_id: '',
		access_token: '',
		access_token_secret: '',
	});
	return (
		<>
			<div className="grid">
				<TextField
					name="mainTwitterHandle"
					margin="normal"
					fullWidth
					label="Main Twitter Handle"
					onChange={(e) => setTwitterHandle(e.target.value)}
					value={twitterHandle[0] === '@' ? twitterHandle : '@' + twitterHandle}
				/>
				<div>
					<h3>Twitter API</h3>
					<TextField
						name="userId"
						margin="normal"
						fullWidth
						label="user_id"
						onChange={(e) =>
							setTwitterApiData({ ...twitterApiData, userId: e.target.value })
						}
						value={twitterApiData.userId}
					/>
					<TextField
						name="accessToken"
						margin="normal"
						fullWidth
						label="access_token"
						onChange={(e) =>
							setTwitterApiData({
								...twitterApiData,
								accessToken: e.target.value,
							})
						}
						value={twitterApiData.accessToken}
					/>
					<TextField
						name="accessTokenSecret"
						margin="normal"
						fullWidth
						label="access_token_secret"
						onChange={(e) =>
							setTwitterApiData({
								...twitterApiData,
								accessTokenSecret: e.target.value,
							})
						}
						value={twitterApiData.accessTokenSecret}
					/>
				</div>
				<div>
					<h3>Tweets</h3>
					<div className="grid-2 tweet-demos">
						<FormControlLabel
							className="align-start"
							margin="normal"
							control={
								<TextareaAutosize
									name="tweet"
									minRows={10}
									margin="normal"
									style={{
										backgroundColor: 'inherit',
										color: 'inherit',
										width: '100%',
										borderRadius: '8px',
									}}
									onChange={(e) => {
										setTweet(e.target.value);
									}}
									value={tweet}
								/>
							}
							labelPlacement="top"
							label="Tweet"
						/>
						<TweetDemo content={tweet} twitterHandle={twitterHandle} />
						<FormControlLabel
							margin="normal"
							className="align-start"
							control={
								<TextareaAutosize
									// todo: tweets to formData
									name="summaryTweet"
									minRows={10}
									margin="normal"
									style={{
										backgroundColor: 'inherit',
										color: 'inherit',
										width: '100%',
										borderRadius: '8px',
									}}
									onChange={(e) => setSummaryTweet(e.target.value)}
									value={summaryTweet}
								/>
							}
							labelPlacement="top"
							label="Summary Tweet"
						/>
						<TweetDemo
							content={summaryTweet}
							twitterHandle={twitterHandle}
							type="summary"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default TwitterData;
