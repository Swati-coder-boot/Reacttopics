import React, { useState } from "react";
let Login = () => {
    let [user, setUser] = useState({ email: '', password: '' });
    let inputHandler = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };
    let getLoginHookDetails = (event) => {
        console.log (user);
    };
    return (
        <>
            <pre>{JSON.stringify(user)}</pre>
            <form onSubmit={getLoginHookDetails}>
                <div className="form-group">
                    <label for="inputEmail">Email</label>
                    <input 
                    type="Email" 
                    className="form-control" 
                    name="email" 
                    placeholder="Email" 
                    value={user.email} 
                    onChange={inputHandler}

                    />
                </div>
                <div className="form-group">
                    <label for="inputPassword">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    name="password"
                    placeholder="password" 
                    value={user.password} 
                    onChange={inputHandler}
                    />
                </div>

                <button type="submit" className="btn btn-success">Click</button>
            </form>




        </>
    );

};
export default Login;
