import React from "react";
const Form1 = () =>{
    var n,e,p,g1;
    const Data =()=>{
        console.log(n);
        console.log(e);
        console.log(p);
        console.log(g1)
    }
    const Data1 =(event)=>{
        n=event.target.value;
    }
    const Data2 =(event)=>{
        e=event.target.value;
    }
    const Data3 =(event)=>{
        p=event.target.value;
    }
    const Data4 =(event)=>{
        g1=event.target.value;
    }
    return(
    <>
      <p>Name: <input type="text" onKeyUp={(val)=>(Data1(val))}/></p>
      <p>Email: <input type="email" onKeyUp={(val)=>(Data2(val))}/></p>
      <p>Phone: <input type="number" onKeyUp={(val)=>(Data3(val))}/></p>
      <p>Gender: <input type="radio" name="gender"  value='Female' onChange={(val)=>(Data4(val))}/> Female
              <input type="radio" name="gender" value='Male' onChange={(val)=>(Data4(val))}/> Male</p>
      <p><button onClick={()=>(Data())}>Submit</button></p>
    </>
    )
}
export default Form1;