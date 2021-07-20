const setInput = ({ state, data }) => ({
	// eslint-disable-next-line no-magic-numbers
	display: (state.display * 10) + data,
});

const clearInput = () => ({
	display: 0,
});

const setOperator = ({ data }) => ({
	operator: data,
});

const actions = {
	setInput,
	clearInput,
	setOperator,
};

export default actions;
