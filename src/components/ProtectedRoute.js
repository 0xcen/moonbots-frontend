import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../contextProviders/UserProvider';

const ProtectedRoute = () => {
	const user = useContext(UserContext);

	// if user is empty → get user → render spinner
	// if no user is returned → set not allowed → render login
	// if user is returned set is allowed depending on role
	const renderComponent = () => {
		if (user.role === 'admin') {
			return <Outlet />;
		} else {
			return <h2 style={{ textAlign: 'center' }}>Not authorized</h2>;
		}
	};

	return renderComponent();
};

export default ProtectedRoute;
