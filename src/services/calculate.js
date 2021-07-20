const actions = {
	'+': (operand, display) => operand + display,
	'-': (operand, display) => operand - display,
	'*': (operand, display) => operand * display,
	'/': (operand, display) => operand / display,
};

const calculate = ({ display, operand, operator }) => {
	// eslint-disable-next-line no-console
	console.log({ display, operand, operator });

	return actions[operator](operand, display);
};

// eslint-disable-next-line no-console
// console.log(calculate(
// 	3, 2, '-'
// ));

export default calculate;
