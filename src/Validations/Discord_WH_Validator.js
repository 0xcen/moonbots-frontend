import * as Yup from 'yup';

export const DiscordWhValidator = Yup.object().shape({
	discord_webhook_listings: Yup.string().matches(
		/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
		'Enter a valid Webhook!'
	),
	discord_webhook_sales: Yup.string().matches(
		/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
		'Enter a valid Webhook!'
	),
});
