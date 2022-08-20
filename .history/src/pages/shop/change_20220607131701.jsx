import { useState } from "react";

const Change = () => {

    const [count, setcount] = useState(1)
    const [dis, setdis] = useState('')

    const minus = (evt) => {
       
        setcount(count - 1);
        if (count === 1) {
            evt.target .disabled = true;
        }
    };
    const plus = () => {
        setcount(count + 1);

    };

    return (
        <div style={{display:'flex'}}>
            <button className="btn btn-info" onClick={minus}>-</button>
            <h4 style={{margin:'10px'}}>{count}</h4>
            <button className="btn btn-info" onClick={plus}>+</button>
        </div>
    );
};


export default Change;