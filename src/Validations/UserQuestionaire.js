import * as Yup from 'yup';

export const UserQuestionaire = Yup.object().shape({
	project_name: Yup.string().required('Required'),
	website: Yup.string()
		.matches(
			/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
			'Enter correct url!'
		)
		.required('Please enter website'),
	main_twitter: Yup.string()
		.required("Your twitter handle should begin with '@'")
		.test('isTwitterHandle', function (e) {
			if (e) {
				return e[0] === '@';
			} else return '';
		}),
});
