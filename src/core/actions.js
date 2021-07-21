import calculate from '../services/calculate.js';

const ten = 10;

const setInput = ({ state, data }) => ({
	display: ((state.display || 0) * ten) + data,
});

const clearInput = ({ seed }) => seed;

const setOperator = ({ data }) => ({
	operator: data,
});

const switchData = ({ state }) => ({
	operand: state.display,
	display: null,
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
