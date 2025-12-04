import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Store from "./Store";
const Page2=()=>{
   const {count,setCount}=useContext(Store);
    return(
        <>
            <h1>Page-2</h1>
            <button onClick={()=>setCount(count+1)}>Add</button>
            <Link to='/'>Page-1</Link>
            <h1>Count:{count}</h1>
        </>
    )
}
export default Page2;