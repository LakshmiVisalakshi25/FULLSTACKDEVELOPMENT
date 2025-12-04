import React from "react";
const Home =()=>{
    function Change(){
        window.location.href='./Service';
    }
    function Change1(){
        window.location.href='./Contact';
    }
    function Change2(){
        window.location.href='./Home';
    }
    return(
        <>
        <h1>404 Not Found</h1>
        <button onClick={Change}>Go To Services Page</button>
        <button onClick={Change1}>Go To Contact Page</button>
        <button onClick={Change2}>Go To Home Page</button>
        </>
    )
}
export default Home;