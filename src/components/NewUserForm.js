import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { StepOne } from './form/StepOne';
import { StepTwo } from './form/StepTwo';
import { StepThree } from './form/StepThree';
import { Button } from '@mui/material';

import { Formik, Form, Field, ErrorMessage } from 'formik';

export const NewUserForm = () => {
	const [data, setData] = useState({
		project_name: '',
		website: '',
		main_twitter: '',
		marketplaces: [],
		rarity: '',
		twitter_bots: [],
		discord_bots: [],
		discord_webhook_sales: '',
		discord_webhook_listings: '',
	});

	const [searchParams] = useSearchParams();
	const screen_name = searchParams.get('screen_name') || '';
	const oauth_token = searchParams.get('oauth_token') || '';
	const oauth_token_secret = searchParams.get('oauth_token_secret') || '';
	const user_id = searchParams.get('user_id') || '';
	const navigate = useNavigate();
	const [bounced, setBounced] = useState(false);

	const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

	const [currentStep, setCurrentStep] = useState(0);

	const makeRequest = async (formData) => {
		const myObj = {
			oauth_token_secret,
			oauth_token,
			user_id,
			screen_name,
			...formData,
		};

		console.log('Form Submitted', myObj);

		// POST Request to server -> Discord
		const res = await axios.post(
			'https://moonbots.herokuapp.com/submit',
			myObj
		);

		// Waits for two seconds or the promise to resolve before redirecting or printing error
		Promise.any([sleep(2000), res])
			.then(() => navigate('/signup/success'))
			.catch((e) => {
				console.log(e);
				navigate('/signup/fail');
			});
	};

	useEffect(() => {
		for (let key in data) {
			sessionStorage.setItem(key, data[key]);
		}
		console.log('USE EFFECT', data);
		return;
	}, [data]);

	const handleNextStep = (newData, final = false) => {
		sessionStorage.clear();
		setData((prev) => ({ ...prev, ...newData }));

		if (final) {
			makeRequest(newData);
			return;
		}

		setCurrentStep((prev) => prev + 1);
	};

	const handlePrevStep = (newData) => {
		setData((prev) => ({ ...prev, ...newData }));
		setCurrentStep((prev) => prev - 1);
	};

	const steps = [
		<StepOne next={handleNextStep} data={data} />,
		<StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
		<StepThree next={handleNextStep} prev={handlePrevStep} data={data} />,
	];

	if (!bounced && searchParams.has('step')) {
		setBounced(true);
		// setData(localStorage.getItem('stepOne'))
		setCurrentStep(1);
	}
	return (
		<>
			<h2 className="form-heading">Setup your moonbots</h2>
			<div className="">{steps[currentStep]}</div>
		</>
	);
};
