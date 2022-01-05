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

	const [currentStep, setCurrentStep] = useState(0);

	const makeRequest = async (formData) => {
		const myObj = {
			oauth_token_secret,
			oauth_token,
			user_id,
			screen_name,
			...formData,
		};

		// POST Request to server -> Discord
		const res = await axios.post(
			'https://moonbots.herokuapp.com/submit',
			myObj
		);

		// // Waits for three seconds or the promise to resolve before redirecting or printing error
		const timoutPromise = new Promise((resolve, reject) => {
			let wait = setTimeout(() => {
				clearTimout(wait);
				reject('Request took too long');
			}, 3000);
		});

		Promise.race([timoutPromise, res])
			.then(() => {
				localStorage.clear();
				sessionStorage.clear();
				navigate('/signup/success');
			})
			.catch((e) => {
				navigate('/signup/fail');
				window.location.reload();
				console.log(e);
				localStorage.clear();
				sessionStorage.clear();
			});
	};

	useEffect(() => {
		for (let key in data) {
			sessionStorage.setItem(key, data[key]);
		}
		return;
	}, [data]);

	const handleNextStep = (newData, final = false) => {
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
		const storedData = {};
		for (let key in data) {
			storedData[key] = sessionStorage.getItem(key);
		}
		setData(storedData);
		setCurrentStep(1);
	}
	return (
		<>
			<h2 className="form-heading">Setup your moonbots</h2>
			<div className="">{steps[currentStep]}</div>
		</>
	);
};
