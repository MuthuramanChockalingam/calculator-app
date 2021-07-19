import { React } from 'react';
import './App.scss';
import Button from './components/Button';
import InputBox from './components/InputBox';

// eslint-disable-next-line no-magic-numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ['+', '-', '*', '/', '%'];

const App = () =>
	<div className="App">
		<div className="calculator">
			<div>{ InputBox() }</div>
			<div className="buttons">
				<div>{ numbers.map(Button) }</div>
				<div>{ operators.map(Button) }</div>
			</div>
		</div>
	</div>;

export default App;
