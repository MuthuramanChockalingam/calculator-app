import { React } from 'react';
import context from '../core/context';

const InputBox = () =>
	<div className="input-box">
		{ context.state.display === null
			? context.state.operand
			: context.state.display }
	</div>;

export default InputBox;
