import * as Yup from 'yup';

export const SignUpValidation = Yup.object().shape({
	project_name: Yup.string().required('Required'),
	website: Yup.string()
		.matches(
			/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
			'Enter a valid url!'
		)
		.required('Please enter website'),
	main_twitter: Yup.string()
		.required("Your twitter handle should begin with '@'")
		.test('isTwitterHandle', function (e) {
			if (e) {
				return e[0] === '@';
			} else return '';
		}),
	solanart_link: Yup.string().matches(
		/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
		'Enter a valid url!'
	),
	magic_eden_link: Yup.string().matches(
		/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
		'Enter a valid url!'
	),
	alpha_art_link: Yup.string().matches(
		/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
		'Enter a valid url!'
	),
	moonrank_link: Yup.string().matches(
		/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
		'Enter a valid url!'
	),
	howrareis_link: Yup.string().matches(
		/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
		'Enter a valid url!'
	),
});
