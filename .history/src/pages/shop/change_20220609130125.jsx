import { useState } from "react";

const Change = ({ price, item }) => {
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

    

    let res = [count * price];
    console.log(res);
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <button className="btn btn-info" onClick={minus}>
                -
            </button>
            <h4 style={{ margin: "10px" }}>{count} </h4>
            <button className="btn btn-info" onClick={plus}>
                +
            </button>
            <input id="klj" type="hidden" value={res} />
            <p style={{ marginBottom: "0", marginLeft: "20px" }}> {res} </p>
        </div>
    );
};

export default Change;
