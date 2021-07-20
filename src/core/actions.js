const setInput = ({ state, data }) => ({
	// eslint-disable-next-line no-magic-numbers
	input: (state.input * 10) + data,
});

const actions = {
	setInput,
};

export default actions;
