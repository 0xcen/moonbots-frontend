import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button } from '@mui/material';
import { MyTextField } from './CustomFormComponents';
import * as Yup from 'yup';
import { Persist } from 'formik-persist';
import ButtonWithLoading from './ButtonWithLoading';
// Validation
export const DiscordWhValidator = Yup.object().shape({
	discord_webhook_listings: Yup.string().matches(
		/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
		'Enter a valid Webhook!'
	),
	discord_webhook_sales: Yup.string().matches(
		/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
		'Enter a valid Webhook!'
	),
});

// Component
export const StepThree = (props) => {
	const handleSubmit = (values) => {
		props.next(values, true);
	};

	return (
		<Formik
			validationSchema={DiscordWhValidator}
			initialValues={props.data}
			onSubmit={handleSubmit}>
			{({ values, isSubmitting }) => {
				return (
					<Form className="form" id="myForm" autoComplete="off">
						<label>
							Please provide a webhook for your discord channel.
							This allows MoonBots to post in your channel. If you
							need help (
							<a
								className="link"
								target="_blank"
								rel="noreferrer"
								href="https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks">
								See Instructions
							</a>
							). If you only want a twitter bot, skip this step.
						</label>
						<Field
							name="discord_webhook_listings"
							fullWidth
							as={MyTextField}
							label="Listings Channel Webhook"
							type="input"
							placeholder="https://discord.com/api/webhooks/926480261779189850/BKkflkmfeyDt_34IKgJnfvO0OBe3tumQ_oXQrn9c58FgijzUMRtyqpshZxfdc344RY7434pQ9"
						/>
						<Field
							name="discord_webhook_sales"
							fullWidth
							as={MyTextField}
							label="Sales Channel Webhook"
							type="input"
							placeholder="https://discord.com/api/webhooks/926480261779189850/BKkflkmfeyDt_34IKgJnfvO0OBe3tumQ_oXQrn9c58FgijzUMRtyqpshZxfdc344RY7434pQ9"
						/>
						<div className="prev-next-wrapper">
							<Button
								size="large"
								variant="outlined"
								onClick={() => props.prev(values)}>
								Back
							</Button>
							<ButtonWithLoading
								size="large"
								type="submit"
								variant="contained"
								text="Submit"
								onClick={() => handleSubmit(values)}
							/>
						</div>
						<Persist name="stepThree" />
					</Form>
				);
			}}
		</Formik>
	);
};
