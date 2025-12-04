import React from "react";
import './Props.css'
const Props=(argument)=>{
    return(
        <div className="Child">
            <div className="Image">
                <img src={argument.Data.image} alt="" />
            </div>
            <div className="Info">
                <div className="Price">
                    <p>Price:{argument.Data.price}</p>
                </div>
                <div className="Brand">
                    <p>Brand:{argument.Data.brand}</p>
                </div>
            </div>
        </div>
    )
}
export default Props;