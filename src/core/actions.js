import calculate from '../services/calculate.js';

const ten = 10;

const setInput = ({ state, data }) => ({
	current: ((state.current || 0) * ten) + data,
});

const clearInput = ({ seed }) => seed;

const setOperator = ({ data }) => ({
	operator: data,
});

const switchData = ({ state }) => ({
	trailing: state.current,
	current: null,
});

const performOperation = ({ state }) => ({
	current: calculate(state),
});

const actions = {
	setInput,
	clearInput,
	setOperator,
	switchData,
	performOperation,
};

export default actions;
