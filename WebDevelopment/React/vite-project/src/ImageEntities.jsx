import React, { useState } from "react";
const ImageEntities=()=>{
    const [Image,setImage]=useState(null);
    const GetData=(event)=>{
        const a=event.target.files[0];
        // const path=URL.createObjectURL(a)
        // console.log(path);
        //Using path
        // setImage(path);
        //using reader
        const reader=new FileReader()
        reader.readAsDataURL(a)
        reader.onload=()=>{
            setImage(reader.result)
        }
    }
    return(
        <>
            <input type="file" onChange={(event)=>GetData(event)} />
            {
                Image ? <img style={{width:"200px"}} src={Image} alt="Image" /> : <h1>"No Image"</h1>
            }
        </>
    )
}
export default ImageEntities;