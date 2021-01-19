import React from "react";
import { useForm } from "react-hook-form";

let Login = () => {
  let { register, handleSubmit, errors } = useForm();

  let onSubmit = (data) => {
    console.log(data);
  };


return (
  <React.Fragment>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1> React-Hook-Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input ref={register({ required: true })} name="email" placeholder="email" className="form-control"/>
              {errors.email && (<span className="text-warning">
                {" "}
                "Email is required swati"
              </span>
              )}
            </div>
            <div className="form-group">
              <input ref={register} name="password" palceholder="password" className="form-control"/>
            </div>
            <div className="form-group">
              <input className="btn btn-success" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </React.Fragment>
)
};

export default Login;