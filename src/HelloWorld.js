import React from 'react';

class HelloWorld extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			"par":"Hi today is monday"
		}

		//this.handleToParaChnage = this.handleToParaChnage.bind(this)
	}
	// handleToParaChnage(){
	// 	this.setState({
	// 		par:"HI today is thudasy"
	// 	})
	// }
	handleToParaChnage = () => {
		this.setState({
			par:"HI today is thudasy"
		})
	}
	render() {
		const data = this.props;
		const { name,fullName,...rest} = data;
		console.log(rest)
		return(
		<div>
			<h1>{`Hello World ${fullName} is name ${name}`}</h1>
			<p>{this.state.par}</p>
			<button onClick={this.handleToParaChnage}>Click</button>
		</div>);
	}
}

export default HelloWorld;
