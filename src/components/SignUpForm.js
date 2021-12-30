import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
	TextField,
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	FormLabel,
} from '@mui/material';
import { Field, Formik, Form, useField, useFormik } from 'formik';
import { ThemeProvider } from '@mui/private-theming';
import TwitterOauth from './TwitterOauth';
import axios from 'axios';

const MyInput = ({ label, preLabel, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className="form-input">
			<label className="input-label">{preLabel}</label>
			<TextField fullWidth={true} label={label} {...props} {...field} />
		</div>
	);
};

const SignUpForm = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const screen_name = searchParams.get('screen_name');
	const oauth_token = searchParams.get('oauth_token');
	const oauth_token_secret = searchParams.get('oauth_token_secret');
	const user_id = searchParams.get('user_id');
	const project_name = localStorage.getItem('project_name');
	const discord_webhook = localStorage.getItem('discord_webhook');

	const myInitialValues = {
		project_name: `${project_name ? project_name : ''}`,
		discord_webhook: `${discord_webhook ? discord_webhook : ''}`,
		bot_type: [],
	};

	const myCheckbox = ({ field, value, label, name, form, ...props }) => {
		return (
			<label {...field} {...props}>
				<Field
					name={name}
					type="checkbox"
					value={value}
					as={Checkbox}
				/>
				{label}
			</label>
		);
	};

	return (
		<>
			<h2 className="form-heading">Set-up your Moonbot</h2>
			{/* <p>
				We just need a couple of bits of information before your new
				bots are initailized
			</p>
			<h3>Twitter Authentication</h3> */}
			{/* <Twitter /> */}
			<Formik
				initialValues={myInitialValues}
				onSubmit={(data) => {
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

					localStorage.clear();
				}}>
				{({ values, handleChange, handleBlur, handleSubmit }) => (
					<Form onSubmit={handleSubmit}>
						<MyInput
							preLabel="What's your NFT collection called?"
							label="Project Name"
							name="project_name"
							placeholder="SolanaMonkeyBusiness"
							type="input"
						/>
						<MyInput
							preLabel="Provide a webhook for your Discord sales channel so Moonbots can go BRR! 💸"
							label="Discord Webhook"
							placeholder="https://discord.com/api/webhooks/924grege09678643/kgregreYQ7PJFc5Pad7RB_lGqAfbkWOJiCADp3323rfes9o93XbOt5iVP"
							name="discord_webhook"
							type="input"
						/>
						<label className="checkbox-group-label">
							Select all that apply:
							<div className="checkbox-group">
								<Field
									name="bot_type"
									value="discord"
									as={myCheckbox}
									label="Discord"
								/>
								<Field
									name="bot_type"
									value="twitter"
									as={myCheckbox}
									label="Twitter"
								/>
								<Field
									name="bot_type"
									value="sales"
									as={myCheckbox}
									label="Sales"
								/>
							</div>
						</label>
						<TwitterOauth
							screen_name={screen_name}
							values={values}
						/>

						<Button
							className="submit-button"
							variant="contained"
							size="large"
							aria-required
							type="submit">
							NEXT
						</Button>
						{/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
					</Form>
				)}
			</Formik>
		</>
	);
};

export default SignUpForm;
