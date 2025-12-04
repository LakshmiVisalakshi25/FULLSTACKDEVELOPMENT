import React from "react";
import logo from './assets/flipkart.jpg';
import './header.css';
import './LogoComponent';
import LogoComponent from "./LogoComponent";
import MenuComponent from "./MenuComponent";
function Header(){
    return(
        <div className="a">
            <LogoComponent />
            <MenuComponent />
        </div>
    )
}
export default Header;