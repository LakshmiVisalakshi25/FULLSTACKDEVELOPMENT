import React from "react";
const Contact =()=>{
    function Change(){
        window.location.href='./Service';
    }
    function Change1(){
        window.location.href='./Home';
    }
    function Change2(){
        window.location.href='./Support';
    }
    return(
    <>
       <h1>Contact Page</h1>
       <button onClick={Change}>Go To Services Page</button>
       <button onClick={Change1}>Go To Home Page</button>
       <button onClick={Change2}>Go To Support Page</button>
    </>
    )
}
export default Contact;