import { React } from 'react';
import context from '../core/context';

const OperatorButton = (operator) =>
	<button
		key={ operator }
		onClick={ () => context.actions.setOperator(operator) }
	>
		{ operator }
	</button>;

export default OperatorButton;
