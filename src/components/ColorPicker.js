import React from 'react';

const ColorPicker = () => {
	return (
		<div>
			<TextField
				variant="outlined"
				value={newThemeColor}
				onChange={(val) => {
					setNewThemeColor(val.target.value);
				}}
			/>
			<Button
				onClick={() => {
					setActiveColor(newThemeColor);
				}}>
				Change Color
			</Button>
		</div>
	);
};

export default ColorPicker;
