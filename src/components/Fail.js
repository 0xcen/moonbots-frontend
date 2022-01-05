import React from 'react';
import { Button } from '@mui/material';

const Fail = (props) => {
	return (
		<div className="container centered">
			<h2 className="h2-loud">Oh no! Something went Wrong.</h2>
			<a className="link" href="/signup">
				Try Again
			</a>
			<p>{JSON.stringify(...props)}</p>
			<div></div>
		</div>
	);
};

export default Fail;
