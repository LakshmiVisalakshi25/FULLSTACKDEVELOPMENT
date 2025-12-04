import React from "react";
import { useState } from "react";
const Hooks =()=>{
    const [X,setX]=useState(true);
    const Change=()=>{
        setX(!X);
    }
    return(
        <>
        {X==true ? <h1>Hello</h1> : <h1>Bye</h1>}
        <button onClick={Change}>Change</button>
        </>
    )
}
export default Hooks;