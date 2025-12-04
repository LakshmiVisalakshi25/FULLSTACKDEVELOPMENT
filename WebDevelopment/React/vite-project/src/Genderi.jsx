import React from "react";
import Gender from "./Gender";
function Genderi(){
    return(
        <div>
            <Gender/>
            <input type="radio" name="gender" ></input>Female
            <input type="radio" name="gender"></input>Male
        </div>
    )
}
export default Genderi;