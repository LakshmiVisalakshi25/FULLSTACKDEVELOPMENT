import React, { useContext } from "react";
import './ReactTask.css';
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Store1 from "./Store1";
import { ToastContainer, toast } from 'react-toastify';
import ViewData from "./ViewData";
const FormR=()=>{
     const {mdata,setmdata}=useContext(Store1)
     const [data,setName]=useState({
        name:'',
        brand:'',
        size:'',
        price:'',
        image:''
    });
    const [Image,setImage]=useState(null);
    function data1(value1){
        setName({...data,name:value1.target.value})
    }
    function data2(value2){
        setName({...data,brand:value2.target.value})
    }
    function data3(value3){
        setName({...data,size:value3.target.value})
    }
    function data4(value4){
        setName({...data,price:value4.target.value})
    }
    function GetData(event1){
            const a=event1.target.files[0];
            const path=URL.createObjectURL(a)
            setImage(path);
            setName({...data,image:path})
    }
    function Submit(event){
        event.preventDefault();
        setmdata([...mdata,data])
        setName(
            {
                name:'',
                brand:'',
                size:'',
                price:'',
            }
        )
        toast.info("Submitted Successfully");
    }
    useEffect(()=>{
        console.log(mdata);
    },[mdata])
    // console.log(data)
    return(
        <>
        <div className="nav">
            <div className="add-data"><button>Add Data</button></div>
            <div className="view-data"><Link to='/ViewData'><button>View Data</button></Link></div>
        </div>
        <form action="">
        <div className="form">
            <label>Name : </label> <input type="text"  onChange={value1=>data1(value1)}/>
            <label >Brand : </label> <input type="text" onChange={value2=>data2(value2)} />
            <label>Size : </label> <input type="number" onChange={value3=>data3(value3)}/>
            <label>Price : </label><input type="number" onChange={value4=>data4(value4)} />
            <label >Choose File : </label><input type="file" onChange={(event1)=>GetData(event1)}/>
            <button type="submit" onClick={(event)=>Submit(event)}>Submit</button>
            <ToastContainer/>
            <button type="reset">Clear</button>
        </div>
        </form>
        </>
    )
}
export default FormR;