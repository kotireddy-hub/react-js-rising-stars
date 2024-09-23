import React from 'react';
import HelloWorld from './HelloWorld';
import Header from './Header';
import HelloWorldFn from './HelloWorldFn';

function App() {
	return (
		<div>
			<Header />
			<HelloWorld name={"Koti"} fullName="kamireddyKotireddy" age={31} desgination = {"software developer"}/>
			<HelloWorldFn />
		</div>
	);
}
/*
props                               state
-> ready only                     state can chnags asyn 
-> immutable                       mutable 
->  pass data parent to child      state hold the infromation 
-> stateless compont can have props state full component 
-> resuble                          state cannot make component resuable
*/
export default App;
