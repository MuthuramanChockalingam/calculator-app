import { React } from 'react';
import context from '../core/context';

const InputBox = () =>
	<div className="input-box">
		{ context.state.current === null
			? context.state.trailing
			: context.state.current }
	</div>;

export default InputBox;
