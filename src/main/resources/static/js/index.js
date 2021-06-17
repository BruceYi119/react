'use strict';

const useEffect = React.useEffect;

const TestBtn = () => {
	const btnRef = React.useRef();
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
		console.log(btnRef.current.innerHTML);
	};

	useEffect(() => {
		alert();

		return function cleanup() {
			alert();
		};
	});

	return (
		<button className="btn btn-danger" onClick={onClick} ref={btnRef}>{text}</button>
	);
};

class Hello extends React.Component {
	render() {
		return (<div>Hello {this.props.toWhat}</div>);
	}
}

ReactDOM.render(<><TestBtn /></>, document.querySelector('#root'));
ReactDOM.render(<><Hello toWhat="World" /></>, document.querySelector('#root1'));
ReactDOM.render(<><TestBtn /><TestBtn /><Hello toWhat="World" /><TestBtn /><TestBtn /></>, document.querySelector('#root5'));