import { React } from 'react';
import context from '../core/context';

const InputBox = () =>
	<div className="input-box">
		{ context.state.display }
	</div>;

export default InputBox;
