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

const CheckboxPersists = ({ name, value, label, ...props }) => {
	// <pre>{JSON.stringify(props)}</pre>;
	return (
		<label>
			<Checkbox
				{...props}
				name={name}
				value={value}
				defaultChecked={
					sessionStorage.getItem(name) &&
					sessionStorage.getItem(name).includes(value)
						? true
						: false
				}
			/>
			{label}
		</label>
	);
};

const CheckboxGroup = ({ fields, name, label, children, ...props }) => {
	let checkboxes = [];
	for (let key in fields) {
		checkboxes.push(
			<Field
				as={CheckboxPersists}
				value={fields[key].value}
				name={name}
				label={fields[key].label}
				key={checkboxes.length}
			/>
		);
	}
	return (
		<div>
			{label ? <label className="input-label">{label}</label> : null}

			<div
				className={
					React.Children.toArray(children).length > 0
						? 'checkbox-group-group'
						: 'checkbox-group'
				}>
				{checkboxes}
				{children}
			</div>
		</div>
	);
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
				<Persist isSessionStorage={true} name="sign-up-form" />
			</Form>
		</Formik>
	);
};

// Component
const SignUpForm = () => {
	const [step, setStep] = useState(0);
	const formik = useFormik({ initialValues: formInitialValues });
	const [searchParams] = useSearchParams();
	const screen_name = searchParams.get('screen_name') || '';
	const oauth_token = searchParams.get('oauth_token') || '';
	const oauth_token_secret = searchParams.get('oauth_token_secret') || '';
	const user_id = searchParams.get('user_id') || '';

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
						.then((response) => console.log('FRONT', response));
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
					<CheckboxGroup
						name="marketplaces"
						label="Which marketplaces is your collection available in?"
						fields={{
							solsea: { value: 'solsea', label: 'Solsea' },
							magic_eden: {
								value: 'magic_eden',
								label: 'Magic Eden',
							},
							solanart: { value: 'solanart', label: 'Solanart' },
							alpha_art: {
								value: 'alpha_art',
								label: 'Alpha Art',
							},
						}}
					/>
					<CheckboxGroup label="Which bots would you like to have installed?">
						<CheckboxGroup
							name="twitter_bots"
							label="Twitter"
							fields={{
								sales: {
									value: 'sales',
									label: 'Sales',
								},
							}}
						/>

						<CheckboxGroup
							name="discord_bots"
							label="Discord"
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
					</CheckboxGroup>
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
