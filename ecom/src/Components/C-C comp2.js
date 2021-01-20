import React from "react";



class Hai extends React.Component {
    state={
        name:"swati",
        password:"1234",
        email:"swati@1234",
    }
    render(){
        return (
            <div>
                <h1>Hello Dear..!!!{this.state.name}{this.state.password}{this.state.email}</h1>
                
            </div>
        )
    }
};

export default Hai;