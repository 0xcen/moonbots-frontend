import React, { useState } from 'react';

function FormUploadTest() {
	const [image, setImage] = useState('');

	return (
		<div>
			<form
				onChange={(e) => {
					setImage(URL.createObjectURL(e.target.files[0]));
					/* 
					TODO: Either send image as blob or as file
                    In order to check for file size you'll need to move files from the File API into your own array and create some validation in between.
                    */
				}}>
				<input multiple type='file' name='image' id='image' />
				{image && <img src={image} alt='img' />}
			</form>
		</div>
	);
}

export default FormUploadTest;
