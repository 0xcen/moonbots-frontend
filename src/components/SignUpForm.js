import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { Radio, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { CheckboxGroup, MyTextField } from './form/CustomFormComponents';
import { capitalize } from '../helpers/capitalize';
import { Persist } from 'formik-persist';
import { ButtonWithLoading } from './form/ButtonWithLoading';
import { SignUpValidation } from '../Validations/SignUpValidation';

export const SignUpForm = () => {
	const [data, setData] = useState({
		project_name: '',
		website: '',
		main_twitter: '',
		marketplaces: [],
		solanart_link: '',
		magic_eden_link: '',
		alpha_art_link: '',
		moonrank_link: '',
		howrareis_link: '',
		rarity: '',
		twitter_bots: [],
		discord_bots: [],
		discord_listings_webhook: '',
		discord_sales_webhook: '',
	});
	const navigate = useNavigate();
	const [bounced, setBounced] = useState(false);
	const [searchParams] = useSearchParams();
	const screen_name = searchParams.get('screen_name') || '';
	const oauth_token = searchParams.get('oauth_token') || '';
	const oauth_token_secret = searchParams.get('oauth_token_secret') || '';
	const user_id = searchParams.get('user_id') || '';
	let id;

	const makeRequest = async (newData) => {
		// POST Request to server -> Discord
		const obj = {
			oauth_token_secret,
			oauth_token,
			screen_name,
			user_id,
			...newData,
		};
		const res = await axios.post(
			// 'https://callistobots.herokuapp.com/submit',
			'http://localhost:8000/submit',
			obj
		);

		// // Waits for three seconds or the promise to resolve before redirecting or printing error
		const timoutPromise = new Promise((resolve, reject) => {
			id = setTimeout(() => {
				reject('Request took too long');
			}, 3000);
		});

		Promise.race([timoutPromise, res])
			.then(() => {
				clearTimeout(id);
				localStorage.clear();
				sessionStorage.clear();
				navigate('/signup/success');
			})
			.catch((e) => {
				clearTimeout(id);
				navigate('/signup/fail');
				window.location.reload();
				console.log(e);
				localStorage.clear();
				sessionStorage.clear();
			});
	};

	useEffect(() => {
		for (let key in data) {
			if (data[key])
				sessionStorage.setItem(key, JSON.stringify(data[key]));
		}
		return;
	}, [data]);

	const handleSubmit = (newData) => {
		makeRequest(newData);
	};

	const handleRedirect = (newData) => {
		setData(newData);
	};

	if (!bounced && searchParams.has('screen_name')) {
		setBounced(true);
		const storedData = {};
		for (let key in data) {
			storedData[key] = JSON.parse(sessionStorage.getItem(key)) || '';
		}
		setData(storedData);
	}
	return (
		<>
			<h2 className="form-heading">Setup your moonbots</h2>
			<Formik
				initialValues={data}
				validationSchema={SignUpValidation}
				onSubmit={handleSubmit}>
				{({ values, submitForm, isValid, isSubmitting }) => (
					<Form className="form" autoComplete="off">
						<Field
							fullWidth
							name="project_name"
							as={MyTextField}
							label="Project Name"
							type="input"
							placeholder="Solana Monkey Business"
						/>
						<Field
							fullWidth
							name="website"
							as={MyTextField}
							label="Website"
							type="input"
							placeholder="https://solanamonkeybusiness.com"
						/>
						<Field
							fullWidth
							name="main_twitter"
							as={MyTextField}
							label="Your project's main Twitter handle"
							type="input"
							placeholder="@SolanaMBS"
						/>
						<div>
							<CheckboxGroup
								name="marketplaces"
								label="Which marketplaces is your collection available in?"
								className="primary-label"
								fields={{
									magic_eden: {
										value: 'magic_eden',
										label: 'Magic Eden',
									},
									solanart: {
										value: 'solanart',
										label: 'Solanart',
									},
									alpha_art: {
										value: 'alpha_art',
										label: 'Alpha Art',
									},
								}}
							/>
							{values.marketplaces &&
								values.marketplaces.length > 0 &&
								values.marketplaces.map((val, i) => (
									<Field
										sx={{ marginTop: '1.8rem' }}
										fullWidth
										name={val + '_link'}
										as={MyTextField}
										type="input"
										key={i}
										label={
											capitalize(val.split('_')) +
											' collection link'
										}
										placeholder={`https://${val
											.split('_')
											.join(
												''
											)}.com/SolanaMonkeyBusiness`}
									/>
								))}
						</div>
						<div>
							<label className="input-label primary-label">
								Rarity Tracking
							</label>
							<div className="checkbox-group">
								<label>
									<Field
										type="radio"
										name="rarity"
										as={Radio}
										value="howRareIs"
									/>
									HowRare.is
								</label>
								<label>
									<Field
										type="radio"
										name="rarity"
										as={Radio}
										value="moonRank"
									/>
									MoonRank
								</label>
							</div>
							{values.rarity && (
								<Field
									sx={{ marginTop: '1.8rem' }}
									type="input"
									className="pop-up-input"
									label={
										values.rarity[0].toUpperCase() +
										values.rarity.slice(1) +
										' collection link'
									}
									placeholder={`https://${values.rarity.toLowerCase()}.${
										values.rarity === 'moonRank'
											? 'app'
											: 'is'
									}/SolanaMonkeyBusiness`}
									as={MyTextField}
									name={values.rarity.toLowerCase() + '_link'}
									fullWidth
								/>
							)}
						</div>
						<CheckboxGroup
							label="Choose your Bots"
							className="primary-label">
							<CheckboxGroup
								name="twitter_bots"
								label="Twitter"
								className="secondary-label"
								fields={{
									sales: {
										value: 'sales',
										label: 'Sales',
									},
								}}
							/>
							{values.twitter_bots &&
								values.twitter_bots.length > 0 &&
								values.twitter_bots.includes('sales') && (
									<div>
										{screen_name ? (
											<p
												className="link"
												style={{
													marginTop: '-1.8rem',
												}}>
												@{screen_name} Successfully
												Linked
											</p>
										) : (
											<ButtonWithLoading
												sx={{ marginTop: '-2rem' }}
												text="Authorize Twitter"
												variant="contained"
												href="http://localhost:8000/twitter/authorize"
												onClick={() =>
													handleRedirect(values)
												}
											/>
										)}
									</div>
								)}
							<CheckboxGroup
								name="discord_bots"
								label="Discord"
								className="secondary-label"
								fields={{
									sales: {
										value: 'sales',
										label: 'Sales',
									},
									listings: {
										value: 'listings',
										label: 'Listings',
									},
								}}
							/>
							{values.discord_bots &&
								values.discord_bots.length > 0 &&
								values.discord_bots.map((val, i) => (
									<Field
										sx={{ marginTop: '1.8rem' }}
										fullWidth
										name={`discord_${val}_webhook`}
										as={MyTextField}
										type="input"
										key={i}
										label={
											capitalize([val]) +
											' Channel Webhook'
										}
										placeholder="https://discord.com/api/webhooks/926480261779189850/BKkflkmfeyDt_34IKgJnfvO0OBe3tumQ_oXQrn9c58FgijzUMRtyqpshZxfdc344RY7434pQ9"
									/>
								))}
						</CheckboxGroup>
						<div className="prev-next-wrapper">
							<div></div>

							{isValid && isSubmitting ? (
								<LoadingButton
									loading
									variant="contained"
									size="large">
									Submit
								</LoadingButton>
							) : (
								<Button variant="contained" type="submit">
									Submit
								</Button>
							)}
						</div>
						<Persist name="stepOne" />
					</Form>
				)}
			</Formik>
		</>
	);
};
