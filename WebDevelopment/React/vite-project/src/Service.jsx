import React from "react";
const Service =()=>{
    function Change(){
        window.location.href='./Home';
    }
    function Change1(){
        window.location.href='./Contact';
    }
    function Change2(){
        window.location.href='./Support';
    }
    return (
    <>
       <h1>Service Page</h1>
       <button onClick={Change}>Go To Home Page</button>
       <button onClick={Change1}>Go To Contact Page</button>
       <button onClick={Change2}>Go To Support Page</button>
    </>
    )
}
export default Service;