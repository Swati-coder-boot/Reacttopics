import React from "react";

class Loyal extends React.Component{
// state without constructor or state property
state = {
    name:"Bhaga",
    id:12233
}

// Event Handler Arrow Function
    handleClick=() =>{
        console.log("Button Clicked");
    };

    // handleClickArg=() =>{
    //    this.handleClick(this.state.id);
    // };

    render(){
        return(
            <div>
                <h1> Hello, {this.state.name}, {this.state.id}</h1>
                {/* <button onClick={this.handleClickArg}>
                Delete</button> */}
                <button onClick={this.handleClick.bind(this, this.state.id)}>Delete</button>
            </div>    
            
        )
    }
}

export default Loyal;