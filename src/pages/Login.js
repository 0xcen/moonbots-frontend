import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import axios from 'axios';
import { UpdateUserContext } from '../contextProviders/UserProvider';

axios.defaults.withCredentials = true;

const Login = () => {
	const updateUser = useContext(UpdateUserContext);
	const [errors, setErrors] = useState('');
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		setErrors('');

		if (!e.target.username.value || !e.target.username.value) {
			return setErrors('Something is not right here...');
		}
		try {
			const res = await axios.post(
				`https://moonbots-dev.herokuapp.com/api/v1/auth/login`,
				{
					username: e.target.username.value,
					password: e.target.password.value,
				},
				{ validateStatus: false }
			);
			const { data } = res;
			// console.log('🚀 ~ file: Login.js ~ line 27 ~ handleLogin ~ res', res);

			e.target.username.value = '';
			e.target.password.value = '';

			if (res.status === 200) {
				updateUser(data.user);
				// console.log(
				// 	'🚀 ~ file: Login.js ~ line 36 ~ handleLogin ~ data.user',
				// 	data.user
				// );
				navigate('/');
			} else {
				setErrors(data.message);
			}
		} catch (error) {}
	};

	return (
		<section className="login full-page">
			<div className="rounded-gradient-bg input-container">
				<h2 className="auth-title">Login</h2>
				<form onSubmit={handleLogin} name="login" method="POST">
					<TextField name="username" type="text" label="username" fullWidth />
					<TextField
						type="password"
						name="password"
						label="password"
						fullWidth
					/>
					{<span className="error">{errors}</span>}
					<button className="btn-cta" type="submit" variant="outlined">
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default Login;
