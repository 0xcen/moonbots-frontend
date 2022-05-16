import React from 'react';
import { TextField } from '@mui/material';

const CodeProtected = () => {
	return (
		<div className="full-page code-protected">
			<h2>Already have an access code?</h2>
			<form onSubmit={(e) => e.preventDefault()}>
				<TextField />
				<button className="btn-cta" type="submit">
					Lets go!
				</button>
			</form>
		</div>
	);
};

export default CodeProtected;
