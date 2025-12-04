import React, { useContext } from "react";
import Store1 from "./Store1";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import './Details.css'
const Details =()=>{
    const {mdata}=useContext(Store1);
    // const [mycard,setmycard]=useState([]);
    const {index} = useParams();
    var arr = mdata.filter((ele,i)=>i==parseInt(index))
        return(
            <>
            {/* <h1>Retrieved</h1> */}
            {
                arr.map((ele,i)=>{
                    return(
                        <div className="child1">
                            <div>Name:{ele.name}</div>
                            <div>Brand:{ele.brand}</div>
                            <div>Size:{ele.size}</div>
                            <div>Price:{ele.price}</div>
                            <div><img src={ele.image} alt="" style={{width:"50px",height:"50px"}} /></div>
                        </div>
                    )
                })
            }
            </>
        )
}
export default Details;