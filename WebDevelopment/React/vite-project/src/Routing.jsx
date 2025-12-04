import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Service from "./Service";
import Support from "./Support";
import Contact from "./Contact";
import Home from "./Home";
const Routing = () =>{
    return(
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={< Home/>}/>
            <Route path="/Home" element={< Home/>}/>
            <Route path="/Service" element={<Service />}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/support" element={<Support/>}/>
        </Routes>
    </BrowserRouter>
    </>
    )
}
export default Routing;