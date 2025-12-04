import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductInfo =()=>{
    const Data =[
        {
            id:1,
            Name : 'Tshirt',
            Price : 2500,
        },
        {
            id:2,
            Name : 'Jean',
            Price : 5000,
        },
        {
            id:3,
            Name : 'Dress',
            Price : 1500
        }
    ]
    const a=useParams();
    const [mycard,setmycard]=useState(null);
    useEffect(()=>{
        Data.filter(ele=>{
            if(ele.id==parseInt(a.id)){
                console.log(ele)
                // setmycard({id:1})
                // console.log(mycard)
                setmycard(ele);
                // console.log(ele.id)
            }
        })
    },[])
    return(
        <>
        {/* <h1>Retrieved</h1> */}
        {
            mycard.map(ele=>{
                Name
            })
        }
        </>
    )
}
export default ProductInfo;