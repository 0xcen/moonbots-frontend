import React from 'react';
import { TextField, Button } from '@mui/material';
import { Field, Formik, Form, useField, useFormik } from 'formik';
import { ThemeProvider } from '@mui/private-theming';

const MyInput = ({ label, preLabel, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className="form-input">
			<label className="input-label">{preLabel}</label>
			<TextField fullWidth="true" label={label} {...props} {...field} />
		</div>
	);
};

const OnboardFlow = () => {
	return (
		<div className="flow-wrapper">
			<h2 className="form-heading">Set-up your Moonbot</h2>
			{/* <p>
				We just need a couple of bits of information before your new
				bots are initailized
			</p>
			<h3>Twitter Authentication</h3> */}
			{/* <Twitter /> */}
			<Formik
				initialValues={{
					projectName: '',
					discordWebhook: '',
				}}
				onSubmit={(data) => {
					console.log(data);
				}}>
				{({ values, handleChange, handleBlur, handleSubmit }) => (
					<Form onSubmit={handleSubmit}>
						<MyInput
							preLabel="What's your NFT collection called?"
							label="Project Name"
							name="projectName"
							placeholder="SolanaMonkeyBusiness"
							type="input"
						/>
						<MyInput
							preLabel="Provide a webhook for your Discord sales channel so Moonbots can go BRR 💸"
							label="Discord Webhook"
							placeholder="https://discord.com/api/webhooks/924grege09678643/kgregreYQ7PJFc5Pad7RB_lGqAfbkWOJiCADp3323rfes9o93XbOt5iVP"
							name="discordWebhook"
							type="input"
						/>
						<Button
							className="submit-button"
							variant="contained"
							size="large"
							type="">
							NEXT
						</Button>
						{/* <MyInput
							label="Project Name"
							name="projectName"
							type="input"
						/> */}
						{/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default OnboardFlow;
