import { React } from 'react';
import context from '../core/context';

const Button = (number) =>
	<button
		key={ number }
		onClick={ () => context.actions.setInput(number) }
	>
		{ number }
	</button>;

export default Button;
