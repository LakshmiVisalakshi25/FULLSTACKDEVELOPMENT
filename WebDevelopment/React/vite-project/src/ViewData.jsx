import React, { useContext ,useEffect,useState} from "react";
import { Link } from "react-router-dom";
import Store1 from "./Store1";
import './ViewData.css'
const ViewData=()=>{
    const {mdata,setmdata}=useContext(Store1);
    const [sample,setsample]=useState([]);
    // const show=()=>{
    //     return(

    //     )
    // }
    const [text,settext]=useState("");
    function capture(event){
        settext(event.target.value);
        if(text==null){
            setsample(mdata)
        }
    }
    useEffect(()=>{
        // console.log(text)
        var arr1= mdata.filter(ele=>ele.brand.includes(text));
        setsample(arr1);
    },[text])
    return(
        <>
        <input type="text" placeholder="Search Name"  style={{marginLeft:"50px"}} onChange={(event)=>capture(event)}/><br /><br />
        <div className="parent">
                {

                    sample.map((ele,index)=>{
                        return(
                        <Link to={`/Details/${index}`} style={{textDecoration:"None"}}>
                        <div className="child" style={{textDecoration:"None"}}>
                               <div><img src={ele.image} alt="" style={{width:"50px",height:"50px"}} /></div>
                               <div>Brand: {ele.brand}</div>
                               <div>Price: {ele.price}</div>
                        </div>
                        </Link>
                        )
                    })
                }
        </div>
        </>
    )
}
export default ViewData