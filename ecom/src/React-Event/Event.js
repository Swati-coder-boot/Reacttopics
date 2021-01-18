import React from "react";

class Event extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
            // name: "Rahul",
            // Roll: this.props.roll
        // };
         this.handleClick = this.handleClick.bind(this)
    }
    // here we can also use arrow/fat funct line nu 14 and delete above line i.e 10  (class component)

    handleClick() {
        console.log("button Clicked", this)
    }
    render() {
        return (
            <div>
                <h1>Hello India 
                    {/* {this.state.name} your roll number is {this.state.roll}  */}
                    </h1>
                <button className="btn btn-success" onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default Event;