import React from "react";
import Laptops from "./F-C comp2";



function Mobile () {
    let name="Prostack";
    let password="abc1234";
    return (
        <div>
            <Laptops 
            name={name}
            password={password}
            />
            
        </div>
    )
}

export default Mobile;