import React,{ useState } from "react";
let CounterHook = () => {
    let [counter, setCounter] = useState(0);
    let counterHandler = () => {
        setCounter(counter + 4);
    };
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1> Counter: {counter} </h1>
                        <button className="btn btn-danger" 
                        onClick={counterHandler}>Click Me</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );  
};
export default CounterHook;