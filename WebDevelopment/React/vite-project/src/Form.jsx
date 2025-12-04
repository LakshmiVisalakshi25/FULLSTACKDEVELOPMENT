import React from "react";
import Name from './Name';
import Input from "./Input";
import Email from "./Email";
import Emaili from "./Emaili";
import Phone from "./Phone";
import Phonei from "./Phonei";
import Gender from "./Gender";
import Genderi from "./Genderi";
function Form(){
    return(
        <div>
            <p><Name/><Input/></p>
            <p><Email /><Emaili/></p>
            <p><Phone /><Phonei/></p>
            <p><Genderi/></p>
        </div>
    )
}
export default Form;