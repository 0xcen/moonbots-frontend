import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Checkbox, Radio } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import * as Yup from 'yup';
import { CheckboxGroup, MyTextField } from './CustomFormComponents';
import { Persist } from 'formik-persist';

export const StepTwo = (props) => {
	const [searchParams] = useSearchParams();
	const screen_name = searchParams.get('screen_name') || '';
	const oauth_token = searchParams.get('oauth_token') || '';
	const oauth_token_secret = searchParams.get('oauth_token_secret') || '';
	const user_id = searchParams.get('user_id') || '';

	const handleSubmit = (values) => {
		props.next(values);
	};

	return (
		<Formik initialValues={props.data} onSubmit={handleSubmit}>
			{({ values }) => (
				<Form>
					<div>
						<label className="input-label">
							Link your bot's twitter account
						</label>
						{screen_name ? (
							<p className="link">
								{`@${screen_name} Successfully Linked`}
							</p>
						) : (
							<Button
								variant="contained"
								href="https://moonbots.herokuapp.com/twitter/authorize">
								Authorize Twitter
							</Button>
						)}
						<div className="prev-next-wrapper">
							<Button
								size="large"
								variant="outlined"
								onClick={() => props.prev(values)}>
								Back
							</Button>
							<Button
								size="large"
								type="submit"
								variant={'contained'}>
								Next
							</Button>
						</div>
					</div>
					<Persist name="stepTwo" />
				</Form>
			)}
		</Formik>
	);
};
