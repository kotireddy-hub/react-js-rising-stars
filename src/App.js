import React from 'react';
import HelloWorld from './HelloWorld';
import Header from './Header';

function App() {
	return (
		<div>
			<Header />
			<HelloWorld name={"Koti"} fullName="kamireddyKotireddy" age={31} desgination = {"software developer"}/>
		</div>
	);
}

export default App;
