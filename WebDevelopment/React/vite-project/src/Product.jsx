import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProductCards from "./ProductCards";
import ProductInfo from "./ProductInfo";
const Product =()=>{
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
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProductCards/>}></Route>
            <Route path="/Product-info/:id" element={<ProductInfo/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Product;