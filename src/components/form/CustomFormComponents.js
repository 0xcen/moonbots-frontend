import React from 'react';
import { TextField, Checkbox } from '@mui/material';
import { Field, useFormikContext } from 'formik';

export const MyTextField = ({ name, ...props }) => {
	const context = useFormikContext();
	const showError = context.touched[name] && name in context.errors;
	return (
		<TextField
			error={showError}
			helperText={showError && context.errors[name]}
			name={name}
			{...props}
		/>
	);
};

export const CheckboxPersists = ({ name, value, label, ...props }) => {
	// <pre>{JSON.stringify(props)}</pre>;
	return (
		<label>
			<Checkbox
				{...props}
				name={name}
				value={value}
				defaultChecked={
					sessionStorage.getItem(name) &&
					sessionStorage.getItem(name).includes(value)
						? true
						: false
				}
			/>
			{label}
		</label>
	);
};

export const CheckboxGroup = ({ fields, name, label, className, children }) => {
	let checkboxes = [];
	const hasChildren = React.Children.toArray(children).length > 0;
	for (let key in fields) {
		checkboxes.push(
			<Field
				as={CheckboxPersists}
				value={fields[key].value}
				name={name}
				label={fields[key].label}
				key={checkboxes.length}
			/>
		);
	}
	return (
		<div>
			{label ? (
				<label className={`input-label ${className}`}>{label}</label>
			) : null}

			<div
				className={
					hasChildren ? 'checkbox-group-group' : 'checkbox-group'
				}>
				{checkboxes}
				{children}
			</div>
		</div>
	);
};
