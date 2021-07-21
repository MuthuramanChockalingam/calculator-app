import { React } from 'react';
import './App.scss';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import InputBox from './components/InputBox';
import OperatorButton from './components/OperatorButton';
import context from './core/context';

// eslint-disable-next-line no-magic-numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ['+', '-', '*', '/', '='];
const clear = ['Clear'];

const App = () => {
	// eslint-disable-next-line no-console
	console.log(context.state);

	return (
		<div className="App">
			<div className="calculator">
				<div>{ InputBox() }</div>
				<div className="buttons">
					<div>{ numbers.map(Button) }</div>
					<div>{ operators.map(OperatorButton) }</div>
					<div>{ clear.map(ClearButton) }</div>
				</div>
			</div>
		</div>);
};

export default App;
