import { React } from 'react';
import context from '../core/context';

const InputBox = () =>
	<input
		className="input-box"
		type="text"
		value={ context.state.input }
		onChange={ () => {} }
	/>;

export default InputBox;
