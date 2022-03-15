import React, { useState, createContext } from 'react';

export const UserContext = createContext({ plural: '', name: '' });
export const UpdateUserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const updateUser = (next) => {
		setUser({ ...user, ...next });
	};
	return (
		<UserContext.Provider value={user}>
			<UpdateUserContext.Provider value={updateUser}>
				{children}
			</UpdateUserContext.Provider>
		</UserContext.Provider>
	);
};

export default UserProvider;
