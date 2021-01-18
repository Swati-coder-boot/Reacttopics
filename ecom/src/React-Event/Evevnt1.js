import React from "react";

function Logo () {
    const handleClick=(e) =>{
        e.preventDefault();
        console.log("Button Clicked");
    }
    return(
        <div>
            <h1>Tomorrow will be holiday</h1>
            <a href="http://www.greetlabs.com" onClick={handleClick}>Click Me</a>
        </div>
    )
}

export default Logo;



