import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';
import React, { useState } from 'react';

const ButtonWithLoading = ({
	variant,
	text,
	size,
	href,
	type,
	onClick,
	...props
}) => {
	const [IsLoading, setIsLoading] = useState(false);
	const handleClick = () => {
		setIsLoading(true);

		return onClick ? onClick() : null;
	};
	return IsLoading ? (
		<LoadingButton loading variant={variant} size={size}>
			{text}
		</LoadingButton>
	) : (
		<Button
			onClick={handleClick}
			variant={variant}
			href={href}
			type={type}
			{...props}>
			{text}
		</Button>
	);
};

export default ButtonWithLoading;
