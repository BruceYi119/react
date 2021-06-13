'use strict';

const useEffect = React.useEffect;

const TestBtn = () => {
	const [text, setText] = React.useState('테스트 버튼');
	const [click, setClick] = React.useState(false);
	const onClick = () => {
		if (click)
			setText('안눌림');
		else
			setText('눌림');

		setClick(!click);
	};

	const alert = () => {
		console.log('alert');
	};

	useEffect(() => {
		alert();

		return function cleanup() {
			alert();
		};
	});

	return (
		<button className="btn btn-danger" onClick={onClick}>{text}</button>
	);
};

class Hello extends React.Component {
	render() {
		return (<div>Hello {this.props.toWhat}</div>);
	}
}

ReactDOM.render(<TestBtn />, document.querySelector('#root'));
ReactDOM.render(<Hello toWhat="World" />, document.querySelector('#root1'));