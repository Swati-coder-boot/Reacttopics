import React from "react";


class Laptops extends React.Component {
    render() {
        return (
            <div>
                <h1>I Learn Many Technologies{this.props.name}{this.props.password}</h1>
            </div>
        )
    }
};

export default Laptops;