import { React } from 'react';
import context from '../core/context';

const ClearButton = (val) =>
	<button
		key={ val }
		onClick={ () => context.actions.clearInput() }
	>
		{ val }
	</button>;

export default ClearButton;
