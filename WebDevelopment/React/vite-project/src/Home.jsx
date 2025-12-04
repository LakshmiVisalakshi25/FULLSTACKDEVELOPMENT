import React from "react";
const Home =()=>{
    function Change(){
        window.location.href='./Service';
    }
    function Change1(){
        window.location.href='./Contact';
    }
    function Change2(){
        window.location.href='./Support';
    }
    return (
        <>
        <h1>Home Page</h1>
        <button onClick={Change}>Go To Services Page</button>
        <button onClick={Change1}>Go To Contact Page</button>
        <button onClick={Change2}>Go To Support Page</button>
        </>
    )
}
export default Home;