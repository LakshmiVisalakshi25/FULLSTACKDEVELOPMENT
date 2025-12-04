import React from "react";
import CountUp from 'react-countup';
import Tilty from 'react-tilty';
import { ToastContainer, toast } from 'react-toastify';
import Image from './assets/dais.jpg';
import {RotatingLines} from "react-loader-spinner";
const Addons=()=>{
    const submit=()=>{
        toast.success("Submitted Successfully");
    }
    return(
        <>
        <CountUp end={500} duration={5}/>
        <Tilty><img src={Image} alt="" style={{width:"100px",height:"100px"}} /></Tilty>
        <button onClick={submit}>Submit</button>
        <ToastContainer/>
        <RotatingLines />
        </>
    )
}
export default Addons;