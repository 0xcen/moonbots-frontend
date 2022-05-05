import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import './auth.css';
import { UpdateUserContext } from '../../contextProviders/UserProvider';

axios.defaults.withCredentials = true;

const Login = () => {
	const updateUser = useContext(UpdateUserContext);
	const [errors, setErrors] = useState('');
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		setErrors('');

		try {
			const res = await axios.post(
				`http://localhost:8000/api/v1/auth/login`,
				{
					username: e.target.username.value,
					password: e.target.password.value,
				},
				{ validateStatus: false }
			);
			const { data } = res;
			console.log('🚀 ~ file: Login.js ~ line 27 ~ handleLogin ~ res', res);

			e.target.username.value = '';
			e.target.password.value = '';

			if (res.status === 200) {
				updateUser(data.user);
				console.log(
					'🚀 ~ file: Login.js ~ line 36 ~ handleLogin ~ data.user',
					data.user
				);
				navigate('/');
			} else {
				setErrors(data.message);
			}
		} catch (error) {}
	};

	return (
		<div className="wrapper">
			<h3 className="auth-title">Login</h3>
			<form onSubmit={handleLogin} name="login" method="POST">
				<TextField name="username" type="text" label="username" fullWidth />
				<TextField type="password" name="password" label="password" fullWidth />
				{<span>{errors}</span>}
				<Button
					type="submit"
					variant="outlined"
					style={{ maxWidth: '3rem', margin: '0 auto' }}
				>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default Login;
