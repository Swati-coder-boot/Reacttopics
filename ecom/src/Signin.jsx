import React from 'react';

class Signin extends React.Component {
    state = {
        email: "",
        password: "",
    };
    emailHandler = (event) => {
        this.setState({
            email: event.target.value,
        });
    };


    passwordHandler = (event) => {
        this.setState({
            password: event.target.value,
        });
    };

    btnHandler = (event) => {
        event.preventdefalut();
        alert(JSON.stringify(this.state));
    };


    render() {

        return (
            <React.Fragment>
                <div className="container">

                    <div className="row">
                        <div className="col-75">
                            <h1>Signin Form</h1>
                            <form>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="email"
                                        value={this.state.email}
                                        className="form-control"
                                        onChange={this.emailHandler}
                                        name='email'
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="password"
                                        value={this.state.password}
                                        className="form-control"
                                        onChange={this.passwordHandler}
                                        name="password"
                                    />
                                </div>

                                <div class="clearfix">
                                    <button type="button" class="cancelbtn">Cancel</button>
                                    <button type="submit" class="signupbtn">Sign Up</button>
                                </div>
  

                            <div>
                                <button className="btn btn-danger" onClick={this.btnHandler}>
                                    <div>Signin</div></button>
                            </div>

                            </form>
                    </div>
                </div>
                </div>

            </React.Fragment >
        );
    }
}


export default Signin;
