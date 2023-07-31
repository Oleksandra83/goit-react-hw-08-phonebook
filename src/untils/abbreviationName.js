export function abbreviationName(name) {
	const arrName = name.toUpperCase().trim().split('');
	const dott = arrName.indexOf(' ');
	const abbrArr = arrName[0] + arrName.slice(dott, dott + 2);
	const result = abbrArr.replace(' ,', '');
	return result;
}