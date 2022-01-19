import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Checkbox, Radio } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import * as Yup from 'yup';
import { CheckboxGroup, MyTextField } from './CustomFormComponents';
import { capitalize } from '../../helpers/capitalize';
import { Persist } from 'formik-persist';
import ButtonWithLoading from './ButtonWithLoading';

export const UserQuestionaire = Yup.object().shape({
	project_name: Yup.string().required('Required'),
	website: Yup.string()
		.matches(
			/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
			'Enter a valid url!'
		)
		.required('Please enter website'),
	main_twitter: Yup.string()
		.required("Your twitter handle should begin with '@'")
		.test('isTwitterHandle', function (e) {
			if (e) {
				return e[0] === '@';
			} else return '';
		}),
	solanart_link: Yup.string().matches(
		/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
		'Enter a valid url!'
	),
	magic_eden_link: Yup.string().matches(
		/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
		'Enter a valid url!'
	),
	alpha_art_link: Yup.string().matches(
		/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
		'Enter a valid url!'
	),
	moonrank_link: Yup.string().matches(
		/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
		'Enter a valid url!'
	),
	howrareis_link: Yup.string().matches(
		/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
		'Enter a valid url!'
	),
});

export const StepOne = (props) => {
	const handleSubmit = (values) => {
		props.next(values);
	};

	return (
		<Formik
			StepOne={UserQuestionaire}
			initialValues={props.data}
			validationSchema={UserQuestionaire}
			onSubmit={handleSubmit}>
			{({ values }) => (
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
						{values.marketplaces.map((val, i) => (
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
									.join('')}.com/SolanaMonkeyBusiness`}
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
									values.rarity == 'moonRank' ? 'app' : 'is'
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
						{values.twitter_bots.includes('sales') && (
							<div>
								<ButtonWithLoading
									// sx={{ margin: '1.8rem 0 2rem' }}
									text="Authenticate Twitter"
									variant="contained"
									size="large"
									href="magiceden.io"
								/>
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
						{values.discord_bots.map((val, i) => (
							<Field
								sx={{ marginTop: '1.8rem' }}
								fullWidth
								name={`discord_${val}_webhook`}
								as={MyTextField}
								type="input"
								key={i}
								label={capitalize([val]) + ' Channel Webhook'}
								placeholder="https://discord.com/api/webhooks/926480261779189850/BKkflkmfeyDt_34IKgJnfvO0OBe3tumQ_oXQrn9c58FgijzUMRtyqpshZxfdc344RY7434pQ9"
							/>
						))}
					</CheckboxGroup>
					<div className="prev-next-wrapper">
						<div></div>
						<Button
							size="large"
							type="submit"
							variant={'contained'}>
							Next
						</Button>
					</div>
					<Persist name="stepOne" />
				</Form>
			)}
		</Formik>
	);
};
