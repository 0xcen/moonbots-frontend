import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Checkbox, Radio } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import * as Yup from 'yup';
import { CheckboxGroup, MyTextField } from './CustomFormComponents';
import { Persist } from 'formik-persist';

export const UserQuestionaire = Yup.object().shape({
	project_name: Yup.string().required('Required'),
	website: Yup.string()
		.matches(
			/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
			'Enter correct url!'
		)
		.required('Please enter website'),
	main_twitter: Yup.string()
		.required("Your twitter handle should begin with '@'")
		.test('isTwitterHandle', function(e) {
			if (e) {
				return e[0] === '@';
			} else return '';
		}),
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
			{() => (
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
