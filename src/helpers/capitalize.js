export const capitalize = (arr) => {
	return arr.map((str) => str[0].toUpperCase() + str.slice(1)).join(' ');
};
