import React, { useState, createContext, useEffect } from 'react';
import isEmpty from '../helpers/isEmpty';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

export const UserContext = createContext();
export const UpdateUserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const updateUser = (next) => {
		setUser(next);
	};

	const getUser = async () => {
		const res = await axios.get('http://localhost:8000/api/v1/users/me', {
			validateStatus: false,
		});

		if (res.status === 200) {
			return res.data.user;
		} else return {};
	};

	useEffect(() => {
		if (isEmpty(user)) {
			(async () => {
				console.log('Getting user');
				// setUser(await getUser());

				setIsLoading(false);
			})();
		}
	}, []);

	return (
		<UserContext.Provider value={user}>
			<UpdateUserContext.Provider value={updateUser}>
				{isLoading ? (
					<CircularProgress
						style={{ display: 'block', margin: '50% auto' }}
						color="inherit"
					/>
				) : (
					children
				)}
			</UpdateUserContext.Provider>
		</UserContext.Provider>
	);
};

export default UserProvider;
