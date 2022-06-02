import React from 'react';
import { TextField } from '@mui/material';

const CodeProtected = () => {
	return (
		<section className=" full-page code-protected">
			<div className="rounded-gradient-bg input-container">
				<h2 className="">Ready to join?</h2>
				<form onSubmit={(e) => e.preventDefault()}>
					<TextField fullWidth label="access code" />
					<button className="btn-cta" type="submit">
						Let me in
					</button>
				</form>
			</div>
		</section>
	);
};

export default CodeProtected;
