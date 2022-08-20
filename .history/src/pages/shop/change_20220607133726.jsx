import { useState } from "react";

const Change = ({price}) => {
    const [count, setcount] = useState(1);
    const [s, sets] = useState(undefined);

    const minus = (evt) => {
        setcount(count - 1);
        sets(evt.target);
        if (count === 1) {
            evt.target.disabled = true;
        } 
    };
    const plus = () => {
        if
        s.disabled = false;
        setcount(count + 1);
    };
    console.log(count * price);

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
