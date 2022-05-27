import React from 'react';
import { TextField } from '@mui/material';

const CodeProtected = () => {
	return (
		<div className="full-page code-protected">
			<form onSubmit={(e) => e.preventDefault()}>
				<h2 className="">Already have an access code?</h2>
				<TextField fullWidth />
				<button className="btn-cta" type="submit">
					Lets go!
				</button>
			</form>
		</div>
	);
};

export default CodeProtected;
