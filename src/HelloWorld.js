import React from 'react';

class HelloWorld extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		const data = this.props;
		const { name,fullName,...rest} = data;
		console.log(rest)
		return <h1>{`Hello World ${fullName} is name ${name}`}</h1>;
	}
}

export default HelloWorld;
