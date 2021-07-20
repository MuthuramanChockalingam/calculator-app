import calculate from '../services/calculate.js';

const ten = 10;

const setInput = ({ state, data }) => ({
	display: (state.display * ten) + data,
});

const clearInput = () => ({
	display: 0,
	operand: 0,
	operator: '',
});

const setOperator = ({ data }) => ({
	operator: data,
});

const switchData = ({ state }) => ({
	operand: state.display,
	display: 0,
});

const performOperation = ({ state }) => ({
	display: calculate(state),
});

const actions = {
	setInput,
	clearInput,
	setOperator,
	switchData,
	performOperation,
};

export default actions;
