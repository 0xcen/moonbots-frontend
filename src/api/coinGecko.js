import axios from 'axios';

export default async function getPrice() {
	const {
		data: { solana: price },
	} = await axios.get(
		'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd',
		{
			withCredentials: false,
		}
	);
	return price;
}
