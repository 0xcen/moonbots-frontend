import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TextField, Button, Checkbox } from '@mui/material';
import { Field, Formik, Form, useFormik } from 'formik';
import { Persist } from 'formik-persist';
import TwitterOauth from './TwitterOauth';
import axios from 'axios';

// Initial Values
const formInitialValues = {
	project_name: '',
	website: '',
	main_twitter: '',
	marketplaces: [],
	twitter: [],
	discord: [],
	discord_webhook: '',
};

const FormikStepper = ({ step, setStep, children, ...props }) => {
	const childrenArray = React.Children.toArray(children);
	const currentChild = childrenArray[step];
	const isLastStep = step === childrenArray.length - 1;

	// Helper
	const handleSubmit = async (data) => {
		if (!isLastStep) {
			for (let key in data) {
				sessionStorage.setItem(key, data[key]);
			}

			setStep((s) => s + 1);
		} else {
			await props.onSubmit(data);
			console.log('SUBMIT', data);
		}
	};

	return (
		<Formik {...props} onSubmit={handleSubmit}>
			<Form autoComplete="off">
				{currentChild}
				<div className="prev-next-wrapper">
					{step >= 1 ? (
						<Button
							variant="outlined"
							onClick={() => {
								setStep((s) => s - 1);
							}}>
							Back
						</Button>
					) : (
						<div></div>
					)}
					{
						<Button
							type="submit"
							variant={isLastStep ? 'contained' : 'outlined'}>
							{isLastStep ? 'Submit' : 'Next'}
						</Button>
					}
				</div>
				<Persist name="sign-up-form" />
			</Form>
		</Formik>
	);
};

// Component
const SignUpForm = () => {
	const [step, setStep] = useState(0);
	const formik = useFormik({ initialValues: formInitialValues });
	const [searchParams] = useSearchParams();
	const screen_name = searchParams.get('screen_name');
	const oauth_token = searchParams.get('oauth_token');
	const oauth_token_secret = searchParams.get('oauth_token_secret');
	const user_id = searchParams.get('user_id');

	useEffect(() => {
		if (searchParams.get('step')) {
			setStep(searchParams.get('step'));
		}
		return () => {};
	}, []);

	return (
		<>
			<h2 className="form-heading">Set-up your Moonbot</h2>
			<FormikStepper
				step={step}
				setStep={setStep}
				initialValues={formik.initialValues}
				onSubmit={async (data) => {
					const myObj = {
						oauth_token_secret,
						oauth_token,
						user_id,
						screen_name,
						...data,
					};

					axios
						.post('http://localhost:8000/submit', myObj)
						.then((response) => console.log(response));
				}}>
				<div className="form">
					<Field
						name="project_name"
						as={TextField}
						label="Project Name"
						type="input"
						placeholder="Solana Monkey Business"
					/>
					<Field
						name="website"
						as={TextField}
						label="Website"
						type="input"
						placeholder="https://solanamonkeybusiness.com"
					/>
					<Field
						name="main_twitter"
						as={TextField}
						label="Your project's main Twitter handle"
						type="input"
						placeholder="@SolanaMBS"
					/>
					<div>
						<label className="input-label">
							Which marketplaces is your collection available in?
						</label>

						<div className="checkbox-group">
							<label>
								<Field
									name="marketplaces"
									as={Checkbox}
									value="magic_eden"
									defaultChecked={
										sessionStorage.getItem(
											'marketplaces'
										) &&
										sessionStorage
											.getItem('marketplaces')
											.includes('magic_eden')
											? true
											: false
									}
								/>
								Magic Eden
							</label>
							<label>
								<Field
									name="marketplaces"
									as={Checkbox}
									value="alpha_art"
									defaultChecked={
										sessionStorage.getItem(
											'marketplaces'
										) &&
										sessionStorage
											.getItem('marketplaces')
											.includes('alpha_art')
											? true
											: false
									}
								/>
								Alpha Art
							</label>
							<label>
								<Field
									name="marketplaces"
									as={Checkbox}
									value="solanart"
									defaultChecked={
										sessionStorage.getItem(
											'marketplaces'
										) &&
										sessionStorage
											.getItem('marketplaces')
											.includes('solanart')
											? true
											: false
									}
								/>
								Solanart
							</label>
						</div>
					</div>
					<div>
						<label className="input-label">
							Which Bots would you like to have installed?
						</label>
						<div className="flex-cl-gap">
							<div>
								<label className="input-label">Twitter</label>
								<label>
									<Field
										name="twitter"
										as={Checkbox}
										value="sales"
										defaultChecked={
											sessionStorage.getItem('twitter') &&
											sessionStorage
												.getItem('twitter')
												.includes('sales')
												? true
												: false
										}
									/>
									Sales
								</label>
							</div>
							<div>
								<label className="input-label">Discord</label>
								<div className="checkbox-group">
									<label>
										<Field
											name="discord"
											as={Checkbox}
											value="sales"
											defaultChecked={
												sessionStorage.getItem(
													'discord'
												) &&
												sessionStorage
													.getItem('discord')
													.includes('sales')
													? true
													: false
											}
										/>
										Sales
									</label>
									<label>
										<Field
											name="discord"
											as={Checkbox}
											value="listings"
											defaultChecked={
												sessionStorage.getItem(
													'discord'
												) &&
												sessionStorage
													.getItem('discord')
													.includes('listings')
													? true
													: false
											}
										/>
										Listings
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<TwitterOauth screen_name={screen_name} />
				<div className="form">
					<Field
						name="discord_webhook_sales"
						as={TextField}
						label="Sales Channel Webhook"
						type="input"
						placeholder="Solana Monkey Business"
					/>
					<Field
						name="discord_webhook_listings"
						as={TextField}
						label="Listings Channel Webhook"
						type="input"
						placeholder="https://solanamonkeybusiness.com"
					/>
				</div>
			</FormikStepper>
		</>
	);
};

export default SignUpForm;
