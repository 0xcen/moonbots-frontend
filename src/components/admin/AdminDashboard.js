import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
	return (
		<ul className="grid-2 centered dashboard">
			<Link to="/new-collection">
				<li className="">New Collection</li>
			</Link>
		</ul>
	);
};

export default AdminDashboard;
