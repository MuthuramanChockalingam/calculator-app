import { React } from 'react';
import context from '../core/context';

const OperatorButton = (operator) =>
	<button
		key={ operator }
		onClick={ () => {
			if(context.state.operator !== '')
				context.actions.performOperation();
			context.actions.setOperator(operator);
			context.actions.switchData();
		} }
	>
		{ operator }
	</button>;

export default OperatorButton;
