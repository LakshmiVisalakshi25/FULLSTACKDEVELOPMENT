import React from "react";
const Dynamic=()=>{
    // var x='visalakshi';
    var arr1=["HTML","CSS","JAVASCRIPT"];
    return(
        <>
        <ol>
        {
            arr1.map((ele)=>{
                return <li>{ele}</li>
            })
        }
        </ol>
        </>
    )
}
export default Dynamic;