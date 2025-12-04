import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Store from "./Store";
const Page1=()=>{
    const {count,setCount}=useContext(Store);
    return(
        <>
            <h1>Page-1</h1>
            <button onClick={()=>setCount(count+1)}>Add</button>
            <Link to='/Page2'>Page-2</Link>
            <h1>Count:{count}</h1>
        </>
    )
}
export default Page1;