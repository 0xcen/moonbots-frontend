import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';

export const ButtonWithLoading = ({
	variant,
	text,
	size,
	href,
	type,
	onClick,
	...props
}) => {
	const [IsLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (props.isSubmitting && props.isValid) {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
		return;
	}, [props.subbitting, props.valid]);

	const handleClick = () => {
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
