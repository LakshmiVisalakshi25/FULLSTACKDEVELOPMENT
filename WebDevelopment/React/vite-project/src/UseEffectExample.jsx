import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './UseEffectExample.css';
const UseEffectExample = () =>{
    const [Data,SetData]=useState([
        {
            name : "john",
            rollno : "21"
        },
        {
            name : "jack",
            rollno : "1"
        },
        {
            name : "lilly",
            rollno : "19"
        },
        {
            name : "jimmy",
            rollno : "20"
        },
        {
            name : "lucky",
            rollno : "15"
        }
    ]);
    const [result,Setresult]=useState([
        // {
        //     name : "john",
        //     rollno : 21
        // },
        // {
        //     name : "jack",
        //     rollno : 1
        // },
        // {
        //     name : "lilly",
        //     rollno : 19
        // },
        // {
        //     name : "jimmy",
        //     rollno : 20
        // },
        // {
        //     name : "lucky",
        //     rollno : 15
        // }
    ])
    const [userinput,Setuserinput]=useState("");
    useEffect(()=>{
        var arr=Data.filter((ele)=> ele.name.includes(userinput) || ele.rollno.includes(userinput))
        Setresult(arr);
    },[userinput]);
    const capture = (event) =>{
        Setuserinput(event.target.value);
    }
    return(
        <>
        <div className="parent">
            <input type="text" placeholder="Search Name Or RollNo" onChange={(event)=>capture(event)} />
            {
                result.map((ele)=>{
                    return(
                        <div className="child">
                            Name : {ele.name} <br />
                            RollNo : {ele.rollno}
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
export default UseEffectExample;