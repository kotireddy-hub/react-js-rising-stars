import React from "react";

function HelloWorldFn(){
const [initalVal, setInitalVal] = React.useState("Hello");


const handleToStateChange = () =>{
    setInitalVal("Hello World")
}

    return <div>
        {initalVal}
        <button onClick={handleToStateChange}>Click</button>
    </div>
};

export default HelloWorldFn;