import React from "react";
import { useState,useEffect } from "react";
import './ToDoList.css';
const ToDoList=()=>{
    const [x,Setx]=useState("");
    const capture=(data)=>{
        Setx(data.target.value);
    }
    const add=()=>{
        Setarr([...arr,{name: x}]);
    }
    const Delete=()=>{
        
    }
    const [arr,Setarr]=useState([
        {
            name : "HTML"
        },
        {
            name : "CSS"
        },
        {
            name : "Javascript"
        }
        
    ])
    return(
        <>
        <div className="a">
            <input type="text" placeholder="Enter an item to add into the list" onChange={data=>capture(data)}></input>
            <button onClick={add}>Add</button>
            <div className="content">
                {
                    arr.map((ele)=>{
                        return(
                            <div className="c1">
                                {ele.name}
                                <button>Edit</button>
                                <button onClick={Delete}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export default ToDoList;