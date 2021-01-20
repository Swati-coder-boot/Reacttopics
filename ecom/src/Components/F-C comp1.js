import React from "react";
import Laptops from "./F-C comp2";



function Mobile (props) {
    let name="Prostack";
    let password="abc1234";
    return (
        <div>
            <Laptops 
            name={props.name}
            password={props.password}
            />
            
        </div>
    )
}

export default Mobile;