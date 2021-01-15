import React from 'react'

function Functcomp () { 
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          React State Example
        </a>
      </nav>
        </>

    );
}

export default Functcomp;


// import React from 'react';

// class Classcomp extends React.Component {
//     render () {
//         return (
//         <h1> hi, How are you</h1>
//         )};
// }
// export default Classcomp;


// import React from "react";

// class Functcomp extends React.Component {
//   render() {
//     let { one, two, three, assets, details } = this.props;
//     return (
//       <>
//         <h1>{one}</h1>
//         <h1>{two}</h1>

//         <h1>{three()}</h1>
//         <h1>{assets.car}</h1>
//         <h3>{details}</h3>
//       </>
//     );
//   }
// }
// export default Functcomp;

import React, { Component } from "react";
class Message extends Component {
  state = {
    message: "Hello",
  };

  changeMessage=()=> {
    console.log("inside changeMessage Class Method");
    this.setState({
      message:"good morning",
    });
  }
  Message=()=> {
    console.log("inside changeMessage Class Method");
    this.setState({
      message:"good afternoon",
    });
  }
  name=()=> {
    console.log("inside changeMessage Class Method");
    this.setState({
      message:"good night",
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>
        <button
          className="btn btn-success btn-sm mr-4"
          onClick= {this.changeMessage}

        >
          Change Messaage
        </button>
        <button
          className="btn btn-danger btn-sm mr-4"
          onClick={this.Message.bind(this)}
        >
          Change Messaage
        </button>
        <button
          className="btn btn-primary btn-sm mr-4"
          onClick={this.name.bind(this)}
        >
          Change Messaage
        </button>
      </div>
    );
  }
}

export default Message;
 