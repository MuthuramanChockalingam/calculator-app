const actions = {
	'+': (trailing, current) => trailing + current,
	'-': (trailing, current) => trailing - current,
	'*': (trailing, current) => trailing * current,
	'/': (trailing, current) => trailing / current,
	'=': (dummy, current) => current,
};

const calculate = ({ current, trailing, operator }) => {
	// eslint-disable-next-line no-console
	console.log({ current, trailing, operator });

	return actions[operator](trailing, current);
};

// eslint-disable-next-line no-console
// console.log(calculate(
// 	3, 2, '-'
// ));

export default calculate;
