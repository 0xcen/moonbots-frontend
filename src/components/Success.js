import React from 'react';
import { Button } from '@mui/material';

const Success = () => {
	return (
		<div className="container centered">
			<h2 className="h2-loud">
				<span role="img" aria-label="rocket">
					🚀
				</span>{' '}
				Liftoff!{' '}
				<span role="img" aria-label="moon">
					🌕
				</span>
			</h2>
			<p>
				Your bot will be installed shortly. In the meantime, feel free
				to reach out to us on discord or{' '}
				<a href="https://twitter.com/wenmoonbots" className="link">
					twitter
				</a>{' '}
				if you have any questions or requests.{' '}
			</p>
			<div>
				<Button
					variant="contained"
					size="large"
					fullWidth={false}
					href="https://discord.gg/ZTsPTbb7Bx">
					Join MoonBot's Server
				</Button>
			</div>
		</div>
	);
};

export default Success;
