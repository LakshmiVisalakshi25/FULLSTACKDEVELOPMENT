import React from "react";
import './ProductCards.css'
const ProductCards=()=>{
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
    return (
        <>
        <div className="parent">
            {
                Data.map(ele=>{
                    return(
                        <div className="Child" onClick={()=>window.location.href=`./Product-info/${ele.id}`}>
                            <div>Name:{ele.Name}</div>
                            <div>Price:{ele.Price}</div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
export default ProductCards;