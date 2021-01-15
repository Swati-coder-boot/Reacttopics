import React from "react";

class classcomp extends Component {
  state = {
    email: "",
    password: "",
  };
  emailHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      email: event.target.value,
    });
  };
  passwordHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      password: event.target.value,
    });
  };
  btnHandler = (event) => {
    event.preventDefault();
    alert(JSON.stringify(this.state));
  };
  render() {

    return (
      <React.Fragment>
        <div className="container">
          <pre>{JSON.stringify(this.state)}</pre>
          <div className="row">
            <div className="col-md-5">
              <h1> Login Form</h1>
              <form>
                <div className="form-group">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="email"
                      value={email}
                      className="form-control"
                      onChange={this.emailHandler}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="password"
                    value={password}
                    className="form-control"
                    onChange={this.passwordHandler}
                  />
                </div>
                <button className="btn btn-danger" onClick={this.btnHandler}>
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

export default classcomp;