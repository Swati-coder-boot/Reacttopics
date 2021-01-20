import React from "react";
import Some from "./C-F comp2";



class Single extends React.Component {
    email="swati8976@gmail.com";
    contact_no=6363040494;
    render() {
        return (
            <div>
                {/* {this.email}{this.contact_no} */}
                <Some
                email={this.email}
                contact_no={this.contact_no}
                 />
            </div>
        )
    }
};

export default Single;