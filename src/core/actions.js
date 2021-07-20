const setInput = ({ state, data }) => ({
	// eslint-disable-next-line no-magic-numbers
	input: (state.input * 10) + data,
});

const clearInput = () => ({
	input: 0,
});

const actions = {
	setInput,
	clearInput,
};

export default actions;
