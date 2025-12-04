import React from "react";
import fImage from './assets/flipkart.jpg'
import './CardsDynamic.css'
const CardsDynamic=()=>{
    const Items=[
        {
            image:fImage,
            price:200,
            brand:300
          },
          {
            image:fImage,
            price:500,
            brand:800
          },
    ]
    return(
    <div className="parent">
        {
        Items.map((ele)=>{
        <div className="Child">
            <div className="Image">
                <img src={ele.image} alt="" />
            </div>
            <div className="Info">
                <div className="Price">Price:{ele.price}</div>
                <div className="Brand">Brand:{ele.brand}</div>
            </div>
        </div>
        })
        }
    </div>
    )
}
export default CardsDynamic;