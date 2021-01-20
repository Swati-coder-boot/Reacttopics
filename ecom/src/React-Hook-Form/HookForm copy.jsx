import React from "react";
import { useForm } from "react-hook-form";

let Login = () => {
  let { register, handleSubmit, errors } = useForm();

  let onSubmit = (e) => {
    console.log(e);
  };


  return (
    <React.Fragment>
      <div className="container"></div>
      <div className="row"></div>
      <div className="col-md-6"></div>
      <h1>React-Hook-Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group"></div>
        <input ref={register({ required: true })} name="email" placeholder="email" className="form-control" />
        {errors.email && (<span className="text-warning">
          {" "}
        "Email is required"
        </span>)}
        <div className="form-group"></div>
        <input ref={register} name="password" placeholder="password" className="form-control" />
        <div className="form-group"></div>
        <input className="btn btn-success" type="submit" />


      </form>

    </React.Fragment>
  )
};

export default Login;