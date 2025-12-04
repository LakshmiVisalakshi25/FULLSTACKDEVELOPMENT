import React, { useEffect, useState } from "react";
const UseEffect = () =>{
    const [x,setx]=useState(0);
    useEffect(()=>{
        console.log("Executed");
    },[x])
    return(
        <>
            <label>Name:  </label><input type="text" /><br></br><br></br>
            <label>Email:  </label><input type="email" /><br></br><br></br>
            <label>Phone Number:  </label><input type="number"/><br></br><br></br>
            <button type="submit" onClick={()=>{setx(x+1)}}>submit</button><br></br><br />
            {x}
        </>
    )
}
export default UseEffect;