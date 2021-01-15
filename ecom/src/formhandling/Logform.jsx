import React from "react";

class Logform extends React.Component {
    state = {
        email: " ",
        password: " ",
        Passwordshown: false,
    };

    outputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(this.state);
    };

    buttonHandler = (event) => {
        event.preventDefault();
        //alert(JSON.stringify(this.state));
    };

    showPassword = () => {
        this.setState({
            Passwordshown:!this.state.Passwordshown,
        });
    };


    render() {

        return (
            <React.Fragment>
                <div className="container">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Login form for Swati</h1>
                            <br />
                            <form>


                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Enter the E-mail"
                                        value={this.state.email} onChange={this.outputHandler} name="email" />
                                </div>
                                <div className="form-group">
                                    <input type={(this.state.Passwordshown)? "text":"password"} className="form-control" placeholder="Enter the Password" 
                                        value={this.state.password} onChange={this.outputHandler} name="password"/>
                                    <i className="fa fa-eye fa-lg" onClick={this.showPassword}></i>
                                </div>
                                <button className="btn btn-warning" onClick={this.buttonHandler}>
                                    Login
                                </button>

                            </form>

                        </div>


                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Logform;