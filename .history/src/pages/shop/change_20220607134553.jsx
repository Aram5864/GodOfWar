import { useState } from "react";

const Change = ({price}) => {
    const [count, setcount] = useState(1);
    const [s, sets] = useState(undefined);
    const [total, settotal] = useState(0);

    const minus = (evt) => {
        setcount(count - 1);
        sets(evt.target);
        if (count === 1) {
            evt.target.disabled = true;
        } 
    };
    const plus = () => {
        if (s != undefined) {
            s.disabled = false;

        }
        setcount(count + 1);

     
    
    };
    let x = [];
    let y = x.push(count * price);
    localStorage.setItem('co',x)
    localStorage.setItem('co',x)

    console.log(x);
    return (
        <div style={{ display: "flex" }}>
            <button className="btn btn-info" onClick={minus}>
                -
            </button>
            <h4 style={{ margin: "10px" }}>{count}</h4>
            <button className="btn btn-info"  onClick={plus}>
                +
            </button>
        </div>
    );
};

export default Change;
